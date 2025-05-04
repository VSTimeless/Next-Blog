/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare module "react" {
  export * from "react";
  export function useState<T>(initialState: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>];
}

declare module "next/link";
declare module "next/image";
declare module "lucide-react";
declare module "@/components/ui/button";
declare module "@/components/ui/card";
declare module "@/components/ui/input";
declare module "@/components/ui/label";
declare module "@/components/ui/textarea";
declare module "@/components/ui/use-toast";
declare module "@/components/project-card";
declare module "@/components/blog-post-card";
declare module "@/components/interest-card"; 