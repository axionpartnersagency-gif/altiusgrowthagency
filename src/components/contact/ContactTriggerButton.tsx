"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import Button from "@/components/ui/Button";
import { useContactModal } from "./ContactModalContext";

type ContactTriggerButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
};

/**
 * Mismo aspecto visual que el <Button> normal, pero en lugar de navegar,
 * abre el modal de contacto. Sustituye a los botones "Quiero conseguir
 * más clientes" que antes enlazaban a #precio o a WhatsApp.
 */
export default function ContactTriggerButton({
  children,
  onClick,
  ...buttonProps
}: ContactTriggerButtonProps) {
  const { open } = useContactModal();

  return (
    <Button
      type="button"
      onClick={(event) => {
        onClick?.(event);
        open();
      }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}
