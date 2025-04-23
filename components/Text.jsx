'use client'
import React from 'react';
import { Button } from './ui/button';
import { toast } from 'sonner';

const Text = () => {

    const handleClick = (mode) => {
        mode ? toast.success('Test Success') : toast.error("test error");
    }

    return (
        <div>
 <Button className="bg-black" variant="default"
              onClick={() => handleClick(false) } >Hello Cnergy </Button>
        </div>
    );
};

export default Text;