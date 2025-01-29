export default function LinkComp(props) {
  return (
    <a
      className="bg-[--background] w-36 h-12 rounded-xl inline-flex center"
      href={props.href}
      target="_blank"
    >
      {props.name}
    </a>
  );
}
