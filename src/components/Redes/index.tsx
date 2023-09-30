interface Props {
  href: string;
  texto: string;
  img?: string;
}

export default function Redes({ href, texto, img }: Props) {
  return (
    <>
      <div >
        <a href={href}>
          <button >
            <img  src={img} alt="" />
            {texto}
          </button>
        </a>
      </div>
    </>
  );
}
