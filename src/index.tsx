import React from "react";

type Level = number;

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type LevelContextValue = { level: Level; Component: Heading };

const LevelContext = React.createContext<LevelContextValue>({
  level: 1,
  Component: "h1",
});

/**
 * Returns the current heading and level.
 */
export function useLevel(): LevelContextValue {
  return React.useContext(LevelContext);
}

type HProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  render?: (context: LevelContextValue) => React.ReactElement;
};

/**
 * Renders a dynamic HTML heading (h1, h2, etc.) or custom component according to the current level.
 */
export function H({ render, ...props }: HProps): JSX.Element {
  const context = useLevel();

  if (render) {
    return render(context);
  }

  if (context.level > 6) {
    props['aria-level'] = context.level;
  }

  return <context.Component {...props} />;
}

type SectionProps = {
  component: React.ReactNode;
  children?: React.ReactNode;
};

/**
 * Renders `component` in the current level and `children` in the next level.
 * @param component A component containing a heading
 * @param children The children in the next level
 */
export function Section({ component, children }: SectionProps): JSX.Element {
  const { level } = useLevel();

  const nextLevel = level + 1;
  const elementType = Math.min(level + 1, 6);

  const value = {
    level: nextLevel,
    Component: `h${elementType}` as Heading,
  };

  return (
    <>
      {component}
      <LevelContext.Provider value={value}>{children}</LevelContext.Provider>
    </>
  );
}
