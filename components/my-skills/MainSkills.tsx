import React from "react";
import Rating from "@mui/material/Rating";

export default function MainSkills() {
  return (
    <div>
      <div className="flex w-full gap-4">
        <ul className="text-sm">
          <li className="flex items-center gap-2">
            Next.js{" "}
            <Rating
              sx={{ color: "#3C3D37" }}
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </li>
          <li className="flex items-center gap-2">
            Tailwind CSS{" "}
            <Rating
              sx={{ color: "#3C3D37" }}
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </li>
          <li className="flex items-center gap-2">
            Laravel{" "}
            <Rating
              sx={{ color: "#3C3D37" }}
              defaultValue={2}
              precision={0.5}
              readOnly
            />
          </li>
          <li className="flex items-center gap-2">
            MySQL{" "}
            <Rating
              sx={{ color: "#3C3D37" }}
              defaultValue={2}
              precision={0.5}
              readOnly
            />
          </li>
          <li className="flex items-center gap-2">
            Sequelize{" "}
            <Rating
              sx={{ color: "#3C3D37" }}
              defaultValue={2}
              precision={0.5}
              readOnly
            />
          </li>
        </ul>

        <ul className="text-sm">
          <li className="flex items-center gap-2">
            HTML{" "}
            <Rating
              sx={{ color: "#3C3D37" }}
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </li>
          <li className="flex items-center gap-2">
            CSS{" "}
            <Rating
              sx={{ color: "#3C3D37" }}
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </li>
          <li className="flex items-center gap-2">
            Javascript{" "}
            <Rating
              sx={{ color: "#3C3D37" }}
              defaultValue={4}
              precision={0.5}
              readOnly
            />
          </li>
          <li className="flex items-center gap-2">
            Typescript{" "}
            <Rating
              sx={{ color: "#3C3D37" }}
              defaultValue={3}
              precision={0.5}
              readOnly
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
