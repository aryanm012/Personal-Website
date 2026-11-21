import { ImageResponse } from "next/og";

export const size = { width: 48, height: 48 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: "#c5b6fb",
          color: "#16101f",
          borderRadius: 11,
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        AM
      </div>
    ),
    size,
  );
}
