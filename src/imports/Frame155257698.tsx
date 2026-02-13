import svgPaths from "./svg-mq5kvmlcfv";
import imgChatGptImage1220262119181 from "figma:asset/8e8480be3605e16ba510ca3fdc9c253d6f881b96.png";
import imgImg03501 from "figma:asset/a4e7dbb251caa2e155d60d701fb531aa843fe19d.png";

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[47.302px] items-start left-[43px] top-[19.25px] uppercase w-[1699px] whitespace-pre-wrap">
      <p className="font-['Unbounded:ExtraBold',sans-serif] font-extrabold h-[220.389px] leading-[268.836px] relative shrink-0 text-[#fffbef] text-[279.2px] tracking-[5.584px] w-[1917px]">BABY MIA</p>
      <p className="font-['Unbounded:Bold',sans-serif] font-bold h-[225.89px] leading-[273.191px] opacity-10 relative shrink-0 text-[#ff0807] text-[283.723px] tracking-[5.6745px] w-[1948.058px]">BABY MIA</p>
      <p className="font-['Unbounded:Bold',sans-serif] font-bold leading-[273.191px] opacity-10 relative shrink-0 text-[#ff0807] text-[283.723px] tracking-[5.6745px] w-[1948.058px]">BABY MIA</p>
      <p className="font-['Unbounded:Bold',sans-serif] font-bold leading-[273.191px] relative shrink-0 text-[#ff78e4] text-[283.723px] tracking-[5.6745px] w-[1948.058px]">BABY MIA</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Unbounded:SemiBold',sans-serif] font-semibold gap-[28px] items-start leading-[58.6px] left-[87px] text-black top-[564px] uppercase w-[341px] whitespace-pre-wrap">
      <p className="relative shrink-0 text-[210px] w-full">25</p>
      <p className="relative shrink-0 text-[63px] w-full">АПРЕЛЯ</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#ff84fd] relative size-full">
      <div className="absolute h-[1080px] left-[-61px] top-0 w-[2339px]" data-name="ChatGPT Image 12 февр. 2026 г., 15_05_34 2" />
      <div className="absolute h-[1080px] left-0 top-0 w-[1920px]" />
      <Frame />
      <p className="absolute font-['Unbounded:SemiBold',sans-serif] font-semibold leading-[0] left-[56px] text-[#fffbef] text-[87.67px] top-[280px] uppercase">
        <span className="leading-[88.598px]">концерт</span>
        <span className="leading-[38.6px]">
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </span>
      </p>
      <div className="absolute flex h-[1233.163px] items-center justify-center left-[408px] top-[86px] w-[1728.478px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[5.1deg]">
          <div className="h-[1091.961px] relative w-[1637.941px]" data-name="ChatGPT Image 12 февр. 2026 г., 21_19_18 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgChatGptImage1220262119181} />
          </div>
        </div>
      </div>
      <div className="absolute h-[1240px] left-[570px] top-[201px] w-[817.81px]" data-name="IMG_0350 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[182.86%] left-[-46.69%] max-w-none top-[-21.9%] w-[184.84%]" src={imgImg03501} />
        </div>
      </div>
      <div className="absolute flex inset-[47.04%_76.03%_5.97%_2.92%] items-center justify-center">
        <div className="flex-none h-[507.547px] rotate-180 w-[404.236px]">
          <div className="relative size-full" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 404.236 507.547">
              <path clipRule="evenodd" d={svgPaths.p164bbc00} fill="var(--fill-0, #FECEFF)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute h-[154.547px] left-[56px] top-[861px] w-[404.235px]" data-name="Subtract">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 404.235 154.547">
          <path d={svgPaths.p35f71470} fill="var(--fill-0, black)" id="Subtract" />
        </svg>
      </div>
      <Frame2 />
      <p className="absolute font-['Unbounded:Medium',sans-serif] font-medium leading-[40.218px] left-[125px] text-[30.75px] text-white top-[931px] tracking-[0.615px]">Купить билет</p>
    </div>
  );
}