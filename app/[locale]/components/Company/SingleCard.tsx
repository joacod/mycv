import { ReactNode } from "react";

interface SingleCardProps {
  icon: ReactNode;
  text: string;
}

export const SingleCard = ({ icon, text }: SingleCardProps) => {
  return (
    <div className="bg-base-content text-base-100 flex items-center rounded-xl p-4">
      <div className="mr-4 h-8 w-8 shrink-0">{icon}</div>
      <span>{text}</span>
    </div>
  );
};
