"use client";

import { FC } from "react";
import { useState } from "react";
import Button from "./ui/Button";
import { signOut } from "next-auth/react";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);
  const signUserOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      // toast{
      //     title:"Error Signing Out",
      //     message:"Please try again later",
      //     type:"error",
      // }
    }
  };

  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
