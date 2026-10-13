import { marqueeMessages } from "@/data/portfolio";

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      {marqueeMessages.map(({ row, text }) => (
        <div key={row} className={`marquee-track marquee-track--${row}`}>
          {[0, 1].map((copy) => (
            <span className="marquee-copy" key={copy}>{text}{" "}<b>✳</b>{" "}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
