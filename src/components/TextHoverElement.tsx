import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

export declare interface TextHoverElementProps {
  text: string;
  children: JSX.Element;
}

const TextHoverElement = ({ text, children }: TextHoverElementProps): JSX.Element => (
  <HoverCardPrimitive.Root>
    <HoverCardPrimitive.Trigger asChild>
      {children}
    </HoverCardPrimitive.Trigger>

    <HoverCardPrimitive.Content
      align="center"
      className="max-w-md rounded-lg p-2 md:w-full bg-white dark:bg-gray-800"
      side="top"
      sideOffset={2}
    >
      <HoverCardPrimitive.Arrow
        className="fill-current text-white dark:text-gray-800"
        offset={12}
      />

      <h3 className="text-xs font-medium text-gray-900 dark:text-gray-100">
        {text}
      </h3>
    </HoverCardPrimitive.Content>
  </HoverCardPrimitive.Root>
);

export default TextHoverElement;
