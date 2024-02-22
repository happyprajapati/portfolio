"use client"
import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
    return(
        <div className="flex flex-row justify-center items-center h-screen w-screen">
            <RotatingLines
            strokeColor="#000000"
            strokeWidth="5"
            animationDuration="0.75"
            width="30"
            visible={true}
          />
          <h1>Getting Everything Ready...</h1>
        </div>
    )
}
