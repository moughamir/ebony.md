import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Store } from '@tauri-apps/plugin-store';

const store = new Store('.settings.dat');

interface OnboardingProps {
  onComplete: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [repoUrl, setRepoUrl] = useState('');

  const handleSave = async () => {
    await store.set('git.name', name);
    await store.set('git.email', email);
    await store.set('git.repoUrl', repoUrl);
    await store.save();
    onComplete();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-full max-w-md p-8 space-y-4 bg-card text-card-foreground rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Welcome to Ebony</h1>
        <p className="text-center text-muted-foreground">
          Let's set up Git for syncing your notes.
        </p>
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="repoUrl">Repository URL</Label>
          <Input
            id="repoUrl"
            placeholder="https://github.com/user/repo.git"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
          />
        </div>
        <Button onClick={handleSave} className="w-full">
          Save and Continue
        </Button>
      </div>
    </div>
  );
};

export default Onboarding;
