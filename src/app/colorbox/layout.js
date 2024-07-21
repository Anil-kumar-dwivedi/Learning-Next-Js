export default function ColorBoxLayout({ children, left, right }) {
  return (
    //custom layout for colorbox
    <section>
      {children}
      {left}
      {right}
    </section>
  );
}
