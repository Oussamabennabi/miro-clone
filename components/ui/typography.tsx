"use client";
interface TypographyProps {
  children: React.ReactNode;
}
export const H1 = ({ children }: TypographyProps) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  );
};
export const H2 = ({ children }: TypographyProps) => {
  return (
    <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  );
};
export const H3 = ({ children }: TypographyProps) => {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
};
export const H4 = ({ children }: TypographyProps) => {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  );
};
export const P = ({ children }: TypographyProps) => {
  return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;
};
export const PMuted = ({ children }: TypographyProps) => {
  return <p className="text-xl text-muted-foreground">{children}</p>;
};
export const Small = ({ children }: TypographyProps) => {
  return <small className="text-sm font-medium leading-none">{children}</small>;
};
