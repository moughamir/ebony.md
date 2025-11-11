use tauri::{
  plugin::{Builder, TauriPlugin},
  Manager, Runtime,
};

pub use models::*;

#[cfg(desktop)]
mod desktop;
#[cfg(mobile)]
mod mobile;

mod commands;
mod error;
mod models;

pub use error::{Error, Result};

#[cfg(desktop)]
use desktop::SamplePlugin;
#[cfg(mobile)]
use mobile::SamplePlugin;

/// Extensions to [`tauri::App`], [`tauri::AppHandle`] and [`tauri::Window`] to access the sample-plugin APIs.
pub trait SamplePluginExt<R: Runtime> {
  fn sample_plugin(&self) -> &SamplePlugin<R>;
}

impl<R: Runtime, T: Manager<R>> crate::SamplePluginExt<R> for T {
  fn sample_plugin(&self) -> &SamplePlugin<R> {
    self.state::<SamplePlugin<R>>().inner()
  }
}

/// Initializes the plugin.
pub fn init<R: Runtime>() -> TauriPlugin<R> {
  Builder::new("sample-plugin")
    .invoke_handler(tauri::generate_handler![commands::ping])
    .setup(|app, api| {
      #[cfg(mobile)]
      let sample_plugin = mobile::init(app, api)?;
      #[cfg(desktop)]
      let sample_plugin = desktop::init(app, api)?;
      app.manage(sample_plugin);
      Ok(())
    })
    .build()
}
