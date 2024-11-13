import React from "react";

function SectionFourText() {
  return (
    <div className="text-foreground text-left space-y-4 text-sm">
      {/* first content */}
      <div>
        <div>
          ☘️<span className="text-pink-500"> (update)</span>{" "}
          <span className="text-green-500">$GINNAN </span> got one more call
          <br /> from: Catfish calls by poe |
        </div>
        <div>⚡️ Avg CPW: 1066.2</div>
        <div>Total calls: 16</div>
      </div>

      {/* second content */}
      <div className="break-words">
        GinNabffZL4fUj9Vactxha74GDAW8kDPGaHqMtMzps2f
      </div>

      {/* third content */}
      <div className="break-words whitespace-normal">
        <div>🕚Volume: 6h: $697.2K |</div>
        <div>1h: $412.7K 🔒MCap: $21.1M |</div>
        <div>Liquid: $522.3K</div>
        <div>🔰Chain: #SOLANA |</div>
        <div>🔰Name: Ginnan the Cat</div>
      </div>
    </div>
  );
}

export default SectionFourText;
