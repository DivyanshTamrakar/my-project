import Image from "next/image";
import React from "react";
import { socialIcons } from "../../data/socialIcons";
import Awards from "./awards";
import Brand from "./brand";
import CopyRight from "./copyright";
import List from "./quickLinks";
import Social from "./social";

function Footer({ data }: { data: any }) {
  return (
    <footer className="bg-black pt-8 md:pt-20">
      <div className="container xl:mx-auto mb-12 px-8 lg:px-20 2xl:px-40">
        {/* grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2.25fr_1fr_1fr_1fr]">
          {/* left */}
          <div>
            {/* logo */}
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAzNDE1IDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9ImxvZ28tc3ZnIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNDE1IDUxMiI+PHN0eWxlPi5sb2dvLXN2ZyAuc3Qye2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I2ZmZn08L3N0eWxlPjxnIGlkPSJHZWVreUFudHNGdWxsTG9nb0xpZ2h0VGhlbWUiPjxnIGlkPSJHcm91cC00Ij48ZyBpZD0iT3ZhbCI+PGNpcmNsZSBpZD0icGF0aC0xXzFfIiBjbGFzcz0ic3QwIiBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNTYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjY2EwMDAwIi8+PC9nPjxkZWZzPjxmaWx0ZXIgaWQ9IkFkb2JlX09wYWNpdHlNYXNrRmlsdGVyIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIHg9Ijk5IiB5PSIxMjciIHdpZHRoPSIzMTUiIGhlaWdodD0iNDkyIj48ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCAwIDAgMCAwIDEgMCIvPjwvZmlsdGVyPjwvZGVmcz48bWFzayBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4PSI5OSIgeT0iMTI3IiB3aWR0aD0iMzE1IiBoZWlnaHQ9IjQ5MiIgaWQ9Im1hc2stMl8xXyI+PGcgY2xhc3M9InN0MSIgZmlsdGVyPSJ1cmwoI0Fkb2JlX09wYWNpdHlNYXNrRmlsdGVyKSI+PGNpcmNsZSBpZD0icGF0aC0xXzJfIiBjbGFzcz0ic3QyIiBjeD0iMjU2IiBjeT0iMjU2IiByPSIyNTYiLz48L2c+PC9tYXNrPjxnIGlkPSJHcm91cC0zIiBjbGFzcz0ic3QzIiBtYXNrPSJ1cmwoI21hc2stMl8xXykiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk5IDEyNykiPjxlbGxpcHNlIGlkPSJPdmFsXzFfIiBjbGFzcz0ic3QyIiBjeD0iMjYuNSIgY3k9IjI2IiByeD0iMjYuNSIgcnk9IjI2Ii8+PGVsbGlwc2UgaWQ9Ik92YWwtQ29weSIgY2xhc3M9InN0MiIgY3g9IjI4OC41IiBjeT0iMjYiIHJ4PSIyNi41IiByeT0iMjYiLz48Y2lyY2xlIGlkPSJPdmFsLUNvcHktMiIgY2xhc3M9InN0MiIgY3g9IjE2MCIgY3k9IjIxNSIgcj0iOTUiLz48Y2lyY2xlIGlkPSJPdmFsLUNvcHktMyIgY2xhc3M9InN0MiIgY3g9IjE2MCIgY3k9IjM5NyIgcj0iOTUiLz48cGF0aCBpZD0iUGF0aC02LUNvcHkiIGNsYXNzPSJzdDIiIGQ9Ik0yNjkuMyAzNmMtMjkuMSAyMi41LTUwLjggNTAuNS02NC45IDgzLjktMjEuMiA1MC4xLTYuMiA1Ny42IDEzLjcgMTEuMyAxMy4zLTMwLjkgMzUtNTkuNyA2NC45LTg2LjRMMjY5LjMgMzZ6Ii8+PHBhdGggaWQ9IlBhdGgtNi1Db3B5LTIiIGNsYXNzPSJzdDIiIGQ9Ik00Ny43IDM2YzI5LjEgMjIuNSA1MC44IDUwLjUgNjQuOSA4My45IDIxLjIgNTAuMSA2LjIgNTcuNi0xMy43IDExLjNDODUuNiAxMDAuMyA2NCA3MS41IDM0IDQ0LjhMNDcuNyAzNnoiLz48cGF0aCBpZD0iUGF0aC03IiBjbGFzcz0ic3QyIiBkPSJNMTI2IDMwMXYxMmg2OHYtMTJoLTY4eiIvPjwvZz48L2c+PC9nPjxwYXRoIGZpbGw9IiNmZmYiIGlkPSJHZWt5QW50cyIgZD0iTTc5Ni44IDQ2Ny43YzM1LjEgMCA2Ny40LTUuMiA5Ni45LTE1LjZzNTEuOC0yNC4xIDY3LjEtNDEuMVYyNDEuN0g3OTIuMlYzMTBoNjkuMXY2NGMtMTIuNiAxMS41LTMxLjkgMTcuMy01Ny44IDE3LjMtMzAuMiAwLTUyLjMtMTAuMy02Ni40LTMxUzcxNiAzMDguNiA3MTYgMjY3LjR2LTI0LjljLjItMzkuMyA3LjEtNjkuNSAyMC43LTkwLjZzMzIuOS0zMS43IDU3LjgtMzEuN2MyMC44IDAgMzYuOCA0LjkgNDguMSAxNC43czE4LjcgMjYuMiAyMi4xIDQ5LjNoOTUuN2MtNC43LTQ2LjYtMjEuMy04MS43LTQ5LjctMTA1LjJTODQyLjQgNDMuNyA3OTEgNDMuN2MtMzUuMSAwLTY2IDguMi05Mi43IDI0LjVzLTQ3LjIgMzkuNi02MS42IDcwLTIxLjUgNjUuOC0yMS41IDEwNi4zbC4zIDM1LjdjMi4zIDU4LjkgMTkuNSAxMDQuOSA1MS44IDEzNy45czc1LjUgNDkuNiAxMjkuNSA0OS42em0zNjUuNiAwYzI1LjEgMCA0OC42LTQuOSA3MC40LTE0LjZzMzguNy0yMi44IDUwLjYtMzkuMmwtNDMuNi01MS41Yy0xNyAyMS4xLTQwLjYgMzEuNy03MC44IDMxLjctMTguMyAwLTMzLjItNC45LTQ0LjctMTQuN3MtMTktMjMuMy0yMi40LTQwLjVoMTg5Ljd2LTM3LjFjMC00Ny44LTEyLjUtODUtMzcuNC0xMTEuN3MtNTguOS00MC4xLTEwMi00MC4xYy0zMC42IDAtNTcgNi42LTc5LjMgMTkuN3MtMzkuMiAzMS43LTUwLjggNTUuNi0xNy40IDUxLjYtMTcuNCA4M3Y3LjljMCA0NC45IDE0LjUgODEuNCA0My42IDEwOS41IDI5IDI3LjkgNjcuMSA0MiAxMTQuMSA0MnptMzUuNy0xODguNmgtOTYuM2M1LjMtMzcgMjEuOS01NS41IDQ5LjgtNTUuNSAxNS4xIDAgMjYuNyA0LjIgMzQuOCAxMi42czEyIDIwLjIgMTEuNiAzNS41djcuNHpNMTcxNC45IDQ2MnYtODcuMmwyNi45LTI2LjkgNjYuOCAxMTQuMUgxOTE4bC0xMTQuNC0xODAuNCAxMDcuMy0xMjZoLTExNC40bC03MS45IDg5LjUtOS42IDEyLjdWMjYuN2gtOTUuNFY0NjJoOTUuM3ptMjcyLjQgMTIzLjhjNDQuOSAwIDc2LjMtMTkuOCA5NC01OS41bDUuNC0xMyAxMjQuOS0zNTcuN2gtMTAyLjJsLTUxIDE3Mi44LTQ4LjQtMTcyLjhoLTEwMmwxMDYuNSAzMDkuMy03LjYgMjAuNGMtMy40IDEwLTguNiAxNi45LTE1LjcgMjAuOHMtMTcuMyA1LjgtMzAuNyA1LjhIMTk0OHY2OC4zYzEzLjggMy43IDI2LjkgNS42IDM5LjMgNS42ek0yMzE1IDQ2MmwyMy44LTc3SDI0NzVsMjQuMSA3N2gxMDYuOEwyNDUzLjUgNDkuN0gyMzYwTDIyMDguOCA0NjJIMjMxNXptMTM2LjItMTUzLjhoLTg4LjZsNDQuMi0xNDMgNDQuNCAxNDN6TTI3MTEuNSA0NjJWMjQ1LjZjOS4xLTE0LjcgMjIuOS0yMi4xIDQxLjYtMjIuMSAxNi40IDAgMjcuOCAzLjYgMzQgMTAuOXM5LjMgMTguNiA5LjMgMzQuMVY0NjJoOTUuN1YyNjQuNmMtLjYtMzguMy04LjctNjctMjQuNS04Ni4xcy0zOS42LTI4LjYtNzEuNS0yOC42Yy0zNy4yIDAtNjYuNCAxMy45LTg3LjUgNDEuNmwtMy4xLTM2SDI2MTZWNDYyaDk1LjV6bTM0NS41IDUuN2MxOC43IDAgMzYuNi0yLjcgNTMuOC04LjJ2LTY4LjNjLTYuNCAxLjEtMTQuMyAxLjctMjMuOCAxLjctMTIuMyAwLTIwLjUtMi4zLTI0LjYtNi44cy02LjItMTIuNi02LjItMjQuMVYyMjEuOGg1MC40di02Ni4zaC01MC40Vjc5LjRoLTk1LjR2NzYuMmgtMzkuMXY2Ni4zaDM5LjFWMzc0YzAgMzEuNSA3LjggNTUgMjMuNSA3MC41czM5LjggMjMuMiA3Mi43IDIzLjJ6bTIwNS45IDBjMzkuNSAwIDcxLjYtOC44IDk2LjQtMjYuM3MzNy4yLTQwLjMgMzcuMi02OC4zYzAtNDEtMjMtNjkuNC02OS4xLTg1LjItMTMuOC00LjctMjkuOC04LjgtNDgtMTIuMnMtMzEuNS03LjctMzkuOC0xMy0xMi41LTEyLjItMTIuNS0yMC43YzAtOC4zIDMuNC0xNS4yIDEwLjItMjAuOHMxNS4yLTguNCAyNS4yLTguNGMyNS45IDAgMzguOCAxMi4zIDM4LjggMzYuOGg5NS43YzAtMjkuOC0xMi4zLTUzLjktMzYuOC03Mi4ycy01Ny0yNy41LTk3LjQtMjcuNWMtMzcuNiAwLTY4IDkuMS05MS4yIDI3LjNzLTM0LjggNDEuNC0zNC44IDY5LjVjMCAxNS45IDQuMSAyOS45IDEyLjIgNDIuMnMxOS45IDIyLjcgMzUuNCAzMS4zIDM1LjEgMTUuNSA1OC45IDIwLjggMzkuOSAxMC40IDQ4LjQgMTUuMyAxMi43IDExLjQgMTIuNyAxOS41YzAgOC41LTMuMyAxNS40LTkuOCAyMC43cy0xNi4zIDcuOS0yOS4zIDcuOWMtMTQuMiAwLTI1LjgtMy4zLTM0LjgtOS44cy0xMy44LTE2LjktMTQuMi0zMWgtODkuMmMwIDE3LjkgNS44IDM1IDE3LjMgNTEuM3MyNy42IDI5LjEgNDguMSAzOC41IDQ0LjEgMTQuMyA3MC40IDE0LjN6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgaWQ9ImUiIGQ9Ik0xNDQ5LjQgNDY3LjdjLTI1LjEgMC00OC42LTQuOS03MC40LTE0LjZzLTM4LjctMjIuOC01MC42LTM5LjJsNDMuNi01MS41YzE3IDIxLjEgNDAuNiAzMS43IDcwLjggMzEuNyAxOC4zIDAgMzMuMi00LjkgNDQuNy0xNC43czE5LTIzLjMgMjIuNC00MC41aC0xODkuN3YtMzcuMWMwLTQ3LjggMTIuNS04NSAzNy40LTExMS43czU4LjktNDAuMSAxMDItNDAuMWMzMC42IDAgNTcgNi42IDc5LjMgMTkuN3MzOS4yIDMxLjcgNTAuOCA1NS42IDE3LjQgNTEuNiAxNy40IDgzdjcuOWMwIDQ0LjktMTQuNSA4MS40LTQzLjYgMTA5LjVzLTY3LjEgNDItMTE0LjEgNDJ6bS0zNS43LTE4OC42aDk2LjNjLTUuMy0zNy0yMS45LTU1LjUtNDkuOC01NS41LTE1LjEgMC0yNi43IDQuMi0zNC44IDEyLjZzLTEyIDIwLjItMTEuNiAzNS41djcuNHoiLz48L2c+PC9zdmc+"
              width="0"
              height="0"
              sizes="100vw"
              className="w-1/2"
              alt="Geekyants logo"
            />

            {/* description */}
            <p className="py-6 pr-10 opacity-60 text-white">
              We are creative Geeks, passionate for designing well crafted,
              simple and functional web and mobile apps.
            </p>

            {/* brands */}
            <Brand />

            {/* connect */}
            <div className="flex flex-col mt-8">
              <h6 className="mb-5 text-lg font-medium text-white opacity-70 tracking-wider">
                CONNECT
              </h6>

              {/* social media icons */}
              <div className="flex flex-wrap w-full">
                {socialIcons.map((item: any, index: number) => {
                  return <Social key={index} data={item} />;
                })}
              </div>
            </div>
          </div>

          {/* quick links */}
          <div className="mt-8 lg:mt-0">
            {/* title */}
            <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg">
              QUICK LINKS
            </h6>

            {/* list */}
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0">
              {data.quickLinks.map((item: any, index: number) => {
                return <List key={index} item={item} />;
              })}
            </ul>
          </div>

          {/* hire developers */}
          <div className="mt-8 lg:mt-0">
            {/* title */}
            <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg">
              HIRE DEVELOPERS
            </h6>

            {/* list */}
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0">
              {data.hireDevelopers.map((item: any, index: number) => {
                return <List key={index} item={item} />;
              })}
            </ul>
          </div>

          <div>
            <div className="mt-8 lg:mt-0">
              {/* title */}
              <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg">
                ENGAGEMENT MODEL
              </h6>

              {/* list */}
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0">
                {data.enagagement.map((item: any, index: number) => {
                  return <List key={index} item={item} />;
                })}
              </ul>
            </div>

            <div className="lg:mt-8 mt-12">
              {/* title */}
              <h6 className="text-white opacity-70 font-mediumm mb-6 text-lg">
                COMPANY
              </h6>

              {/* list */}
              <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-3 lg:gap-0">
                {data.company.map((item: any, index: number) => {
                  return <List key={index} item={item} />;
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* awards */}
        <div className="grid mt-14 grid-cols-3 md:grid-cols-7 items-center justify-items-center gap-14 py-10 border-y border-[#707070]">
          {data.awards.map((item: any, index: number) => {
            return <Awards key={index} item={item} />;
          })}
        </div>

        {/* addresses */}
        <div className="grid md:grid-cols-3 mt-10 gap-10 pt-12">
          {/* india */}
          <div>
            {/* title */}
            <h6 className="flex items-center">
              <Image
                src="https://geekyants.com/_next/static/images/India-83003bb4d679919eec3d65fb83459007.svg"
                width="0"
                height="0"
                sizes="100vw"
                className="w-6 mr-2"
                alt="India"
              />

              <span className="text-white opacity-70">
                GeekyAnts India Pvt Ltd
              </span>
            </h6>

            {/* address */}
            <address className="mt-3 text-white opacity-70 text-sm font-normal not-italic">
              <span className="block leading-6">
                No. 18, 2nd Cross Road, N S Palya, 2nd Stage
              </span>
              <span className="block leading-6">
                BTM Layout, Bangalore - 560076, Karnataka, India
              </span>
              <div className="leading-6 pt-2 flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-90"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                </svg>

                <span className="block px-3"> +91 9595884422</span>
              </div>
            </address>
          </div>

          {/* uk */}
          <div>
            {/* title */}
            <h6 className="flex items-center">
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDUwMCI+PHBhdGggZmlsbD0iIzAwNiIgZD0iTTAgMGgxMDAwLjAydjUwMC4wMUgweiIvPjxwYXRoIGQ9Ik0wIDB2NTUuOTAzbDg4OC4yMTggNDQ0LjEwOWgxMTEuODAyVjQ0NC4xMUwxMTEuODAyIDBIMHptMTAwMC4wMiAwdjU1LjkwMUwxMTEuODAyIDUwMC4wMUgwdi01NS45MDFMODg4LjIxOCAwaDExMS44MDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTQxNi42NzUgMHY1MDAuMDFoMTY2LjY3VjBoLTE2Ni42N3pNMCAxNjYuNjd2MTY2LjY3aDEwMDAuMDJWMTY2LjY3SDB6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTAgMjAwLjAwNHYxMDAuMDAyaDEwMDAuMDJWMjAwLjAwNEgwek00NTAuMDA5IDB2NTAwLjAxaDEwMC4wMDJWMEg0NTAuMDA5ek0wIDUwMC4wMWwzMzMuMzQtMTY2LjY3aDc0LjUzNUw3NC41MzUgNTAwLjAxSDB6TTAgMGwzMzMuMzQgMTY2LjY3aC03NC41MzVMMCAzNy4yN1Ywem01OTIuMTQ1IDE2Ni42N0w5MjUuNDg1IDBoNzQuNTM1TDY2Ni42OCAxNjYuNjdoLTc0LjUzNXptNDA3Ljg3NSAzMzMuMzRMNjY2LjY4IDMzMy4zNGg3NC41MzVsMjU4LjgwNSAxMjkuNDAzdjM3LjI2N3oiIGZpbGw9IiNjMDAiLz48L3N2Zz4="
                width="0"
                height="0"
                sizes="100vw"
                className="w-6 mr-2"
                alt="India"
              />

              <span className="text-white opacity-70">GeekyAnts UK Ltd</span>
            </h6>

            {/* address */}
            <address className="mt-3 text-white opacity-70 text-sm font-normal not-italic">
              <span className="block leading-6">
                7 Bickleigh House, Frogwell Close, London N15 6ED,
              </span>
              <span className="block leading-6">England, UK</span>
              <div className="leading-6 pt-2 flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-90"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                </svg>

                <span className="block px-3"> 44 7424797407</span>
              </div>
            </address>
          </div>

          {/* us */}
          <div>
            {/* title */}
            <h6 className="flex items-center">
              <Image
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTIzNSIgaGVpZ2h0PSI2NTAiIHZpZXdCb3g9IjAgMCA3NDEwIDM5MDAiPjxwYXRoIGZpbGw9IiNiMjIyMzQiIGQ9Ik0wIDBoNzQxMHYzOTAwSDB6Ii8+PHBhdGggZD0iTTAgNDUwaDc0MTBtMCA2MDBIMG0wIDYwMGg3NDEwbTAgNjAwSDBtMCA2MDBoNzQxMG0wIDYwMEgwIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMzAwIi8+PHBhdGggZmlsbD0iIzNjM2I2ZSIgZD0iTTAgMGgyOTY0djIxMDBIMHoiLz48ZyBmaWxsPSIjZmZmIj48ZyBpZD0iZCI+PGcgaWQ9ImMiPjxnIGlkPSJlIj48ZyBpZD0iYiI+PHBhdGggaWQ9ImEiIGQ9Ik0yNDcgOTBsNzAuNTM0IDIxNy4wODItMTg0LjY2LTEzNC4xNjRoMjI4LjI1M0wxNzYuNDY2IDMwNy4wODJ6Ii8+PHVzZSB4bGluazpocmVmPSIjYSIgeT0iNDIwIi8+PHVzZSB4bGluazpocmVmPSIjYSIgeT0iODQwIi8+PHVzZSB4bGluazpocmVmPSIjYSIgeT0iMTI2MCIvPjwvZz48dXNlIHhsaW5rOmhyZWY9IiNhIiB5PSIxNjgwIi8+PC9nPjx1c2UgeGxpbms6aHJlZj0iI2IiIHg9IjI0NyIgeT0iMjEwIi8+PC9nPjx1c2UgeGxpbms6aHJlZj0iI2MiIHg9IjQ5NCIvPjwvZz48dXNlIHhsaW5rOmhyZWY9IiNkIiB4PSI5ODgiLz48dXNlIHhsaW5rOmhyZWY9IiNjIiB4PSIxOTc2Ii8+PHVzZSB4bGluazpocmVmPSIjZSIgeD0iMjQ3MCIvPjwvZz48L3N2Zz4="
                width="0"
                height="0"
                sizes="100vw"
                className="w-6 mr-2"
                alt="India"
              />

              <span className="text-white opacity-70">GeekyAnts Inc</span>
            </h6>

            {/* address */}
            <address className="mt-3 text-white opacity-70 text-sm font-normal not-italic">
              <span className="block leading-6">
                315 Montgomery Street, 9th & 10th Floors,
              </span>
              <span className="block leading-6">
                San Francisco, CA, 94104, USA
              </span>
              <div className="leading-6 pt-2 flex items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-90"
                >
                  <path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path>
                </svg>

                <span className="block px-3"> +1(415)2759099</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* copyright */}
      <CopyRight />
    </footer>
  );
}

export default Footer;
