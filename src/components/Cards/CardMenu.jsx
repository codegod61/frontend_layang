/* eslint-disable react/prop-types */
export default function CardMenu({ menu, menuDesc }) {
    return(
        <div className="card w-[264px] border-[1px] rounded-[30px] border-[#D9D9D9] py-[35px] px-[24px] gap-[24px] hover:border-transparent hover:shadow-lg transition-all duration-300">
            <svg className="" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M14.818 3.18198C16.5754 1.42462 19.4246 1.42462 21.182 3.18198L32.818 14.818C34.5754 16.5754 34.5754 19.4246 32.818 21.182L21.182 32.818C19.4246 34.5754 16.5754 34.5754 14.818 32.818L3.18198 21.182C1.42462 19.4246 1.42462 16.5754 3.18198 14.818L14.818 3.18198Z" fill="url(#paint0_linear_309_288)"/>
                <path d="M14.818 3.18198C16.5754 1.42462 19.4246 1.42462 21.182 3.18198L32.818 14.818C34.5754 16.5754 34.5754 19.4246 32.818 21.182L21.182 32.818C19.4246 34.5754 16.5754 34.5754 14.818 32.818L3.18198 21.182C1.42462 19.4246 1.42462 16.5754 3.18198 14.818L14.818 3.18198Z" fill="black"/>
                <defs>
                    <linearGradient id="paint0_linear_309_288" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#DEDEDE"/>
                    <stop offset="1" stop-color="#DEDEDE" stop-opacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
            <h1 className="font-Poppins text-[20px] font-bold mt-[24px] mb-[16px] text-[#27005D]">{menu}</h1>
            <p className="text-[#7D7D7D]">{menuDesc}</p>
        </div>
    )
}