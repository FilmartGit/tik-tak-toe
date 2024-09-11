import clsx from "clsx";

/**
 * @param {
 *  children: any,
 *  className: string,
 *  size: 'md' | 'lg'
 *  variant: 'primary' | 'outline'
 * } props
 */

export function UIButton({ children, className, size, variant }) {
  const buttonClass = clsx(
    "transition-colors leading-tight",
    className,
    {
      md: "px-6 py-2 rounded text-sm",
      lg: "px-5 py-2 rounded-lg text-2xl",
    }[size],
    {
      primary: "bg-teal-600 text-white hover:bg-teal-500",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant],
  );
  return <button className={buttonClass}>{children}</button>;
}
