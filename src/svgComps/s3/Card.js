import React, {useRef} from "react";
import '../../css/styles.scss';
import {useInView, useSpring, animated} from "@react-spring/web";
import {Trans} from "react-i18next";
import i18next from "i18next";

// Notice: The text is IN the SVG in a <text>! Because it's imported from Figma with
// Outline Text disabled to keep it SEO, copyable and to save some time

function Card() {
    const getLanguage = () => i18next.language || window.localStorage.i18nextLng

    const [ref, isInView] = useInView({
    })
    const animatedAlready = useRef(false)

    if (isInView) {
        animatedAlready.current = true;
    }

    const styles = useSpring({
        x: animatedAlready.current ? 0 : (isInView ? 0 : -100),
        config: {
            mass: 6,
            friction: 70,
            tension: 120,
        }
    })

    return (
        <animated.svg ref={ref} style={styles} className={"aboutCard"} width="885" height="537" viewBox="0 0 585 537"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
            <rect x="869" width="16" height="537" rx="6" fill="#545454"/>
            <rect x="869" width="5" height="537" rx="2.5" fill="#212121"/>
            <rect x="880" width="5" height="537" rx="2.5" fill="#212121"/>
            <path
                d="M882.5 27V24.5H880H11C6.30558 24.5 2.5 28.3056 2.5 33V512C2.5 516.694 6.3056 520.5 11 520.5H880H882.5V518V27Z"
                fill="white" stroke="#212121" stroke-width="5"/>
            <rect x="13.5" y="35.5" width="858" height="474" rx="16.5" fill="#212121" stroke="white"
                  stroke-width="17"/>
            <text fill="white" className={"whiteSpacePre"} font-family="Comfortaa" font-size="128"
                  letter-spacing="0em">
                <tspan x="57" y="196.908"><Trans i18nKey={"aboutMeTitle"}></Trans></tspan>
            </text>
            <text fill="white" className={"whiteSpacePre"} font-family="Comfortaa" font-size="32"
                  letter-spacing="0em">
                <tspan x="57" y="273.352">{<Trans i18nKey={"aboutMeDesc.line1"}></Trans>}</tspan>
                <tspan x="57" y="309.352"><Trans i18nKey={"aboutMeDesc.line2"}></Trans></tspan>
                <tspan x="57" y="345.352">&#10;</tspan>
                <tspan x="57" y="381.352"><Trans i18nKey={"aboutMeDesc.line3"}></Trans></tspan>
                <tspan x="57" y="417.352"><Trans i18nKey={"aboutMeDesc.line4"}></Trans></tspan>
            </text>
            {getLanguage()==="uk" ? <></> : <>
                (

                {/*edited!*/}
                <path   transform="translate(4, 0)" className={"noSelect purpleAboutBit"} fill-rule="evenodd" clip-rule="evenodd" stroke-width="1"
                      stroke="#9100BA"
                      d="M664.264 188.808C666.751 188.808 669 190.674 669 193.161V193.54C669 195.694 667.416 197.556 665.262 197.624C664.928 197.635 664.596 197.64 664.264 197.64C657.352 197.64 651.208 196.146 645.832 193.16C640.541 190.088 636.36 185.864 633.288 180.488C630.301 175.112 628.808 168.968 628.808 162.056C628.808 155.058 630.216 148.914 633.032 143.624C635.933 138.248 639.901 134.024 644.936 130.952C649.971 127.88 655.773 126.344 662.344 126.344C663.417 126.344 664.466 126.385 665.492 126.466C667.535 126.629 669 128.411 669 130.461C669 133.256 666.318 135.31 663.524 135.199C663.136 135.183 662.742 135.176 662.344 135.176C657.48 135.176 653.213 136.328 649.544 138.632C645.875 140.936 643.016 144.136 640.968 148.232C640.621 148.941 640.304 149.669 640.019 150.416C638.72 153.811 641.584 157.064 645.218 157.064H664.904C667.166 157.064 669 158.898 669 161.16C669 163.422 667.166 165.256 664.904 165.256H644.761C641.226 165.256 638.383 168.343 639.511 171.694C640.003 173.155 640.617 174.55 641.352 175.88C643.656 179.89 646.771 183.048 650.696 185.352C654.621 187.656 659.144 188.808 664.264 188.808Z"
                      fill="#9100BA"/>
                <path className={"noSelect purpleAboutBit"} fill-rule="evenodd" clip-rule="evenodd" stroke-width="1"
                      stroke="#9100BA"
                      d="M618.503 365.686C617.757 365.771 617 365.241 617 364.49C617 364.028 617.293 363.61 617.744 363.507C618.336 363.371 618.957 363.304 619.606 363.304C621.12 363.304 622.475 363.624 623.67 364.264C624.864 364.882 625.803 365.8 626.486 367.016C627.189 368.232 627.542 369.714 627.542 371.464V379.784C627.542 380.125 627.424 380.413 627.19 380.648C626.955 380.882 626.667 381 626.326 381C625.963 381 625.664 380.882 625.43 380.648C625.195 380.413 625.078 380.125 625.078 379.784V371.464C625.078 370.141 624.822 369.053 624.31 368.2C623.819 367.346 623.136 366.706 622.262 366.28C621.408 365.853 620.438 365.64 619.35 365.64C619.06 365.64 618.778 365.655 618.503 365.686ZM618.34 401.096C618.028 401.782 617 401.56 617 400.805V400.187C617 399.773 617.32 399.423 617.704 399.58C617.713 399.584 617.723 399.588 617.732 399.592C618.458 399.89 618.66 400.392 618.34 401.096ZM669 399.584C669 399.448 668.891 399.336 668.754 399.336C667.048 399.336 665.522 399.72 664.178 400.488C662.834 401.256 661.778 402.312 661.01 403.656C660.242 405 659.858 406.536 659.858 408.264C659.858 409.97 660.242 411.496 661.01 412.84C661.778 414.184 662.834 415.24 664.178 416.008C665.522 416.776 667.048 417.16 668.754 417.16C668.891 417.16 669 417.048 669 416.911V415.162C669 415.027 668.889 414.92 668.754 414.92C667.517 414.92 666.408 414.632 665.426 414.056C664.445 413.48 663.666 412.69 663.09 411.688C662.536 410.685 662.258 409.544 662.258 408.264C662.258 406.984 662.536 405.842 663.09 404.84C663.666 403.816 664.445 403.016 665.426 402.44C666.408 401.864 667.517 401.576 668.754 401.576C668.889 401.576 669 401.468 669 401.334V399.584ZM669 365.6C669 365.063 668.406 364.745 667.982 365.075C667.44 365.497 666.469 365.126 666.469 364.439V357.256C666.469 356.872 666.352 356.573 666.117 356.36C665.904 356.125 665.616 356.008 665.253 356.008C664.869 356.008 664.56 356.125 664.325 356.36C664.112 356.573 664.005 356.872 664.005 357.256V372.36C664.026 374.024 664.421 375.528 665.189 376.872C665.978 378.194 667.034 379.24 668.357 380.008C668.65 380.175 669 379.954 669 379.616V378.309C669 377.903 668.805 377.528 668.508 377.252C668.017 376.794 667.604 376.262 667.269 375.656C666.714 374.653 666.437 373.512 666.437 372.232C666.437 370.973 666.714 369.842 667.269 368.84C667.619 368.193 668.055 367.636 668.575 367.168C668.832 366.936 669 366.616 669 366.27V365.6ZM669 303.464V305.341C669 306.446 667.803 306.988 667.264 306.024C666.752 305.085 666.496 304.018 666.496 302.824V296.36C666.496 295.211 665.565 294.28 664.416 294.28C664.096 294.28 663.83 294.184 663.616 293.992C663.403 293.778 663.296 293.522 663.296 293.224C663.296 292.904 663.403 292.648 663.616 292.456C663.83 292.242 664.096 292.136 664.416 292.136C665.565 292.136 666.496 291.205 666.496 290.056V287.176C666.496 286.813 666.603 286.514 666.816 286.28C667.051 286.045 667.35 285.928 667.712 285.928C668.075 285.928 668.374 286.045 668.608 286.28C668.843 286.514 668.96 286.813 668.96 287.176V292.116C668.96 292.127 668.969 292.136 668.98 292.136C668.991 292.136 669 292.145 669 292.156V294.26C669 294.271 668.991 294.28 668.98 294.28C668.969 294.28 668.96 294.289 668.96 294.3V302.824C668.96 303.045 668.973 303.259 669 303.464ZM626.774 308.68C627.009 308.893 627.319 309 627.703 309C628.065 309 628.353 308.893 628.566 308.68C628.801 308.445 628.919 308.136 628.919 307.752V292.744C628.919 292.36 628.801 292.061 628.566 291.848C628.353 291.613 628.065 291.496 627.703 291.496C627.319 291.496 627.009 291.613 626.774 291.848C626.561 292.061 626.455 292.36 626.455 292.744V307.752C626.455 308.136 626.561 308.445 626.774 308.68ZM626.455 287.656C626.796 287.997 627.201 288.168 627.67 288.168C628.161 288.168 628.577 287.997 628.919 287.656C629.26 287.314 629.431 286.898 629.431 286.408C629.431 285.874 629.249 285.458 628.887 285.16C628.545 284.84 628.151 284.68 627.703 284.68C627.233 284.68 626.817 284.84 626.455 285.16C626.113 285.458 625.943 285.874 625.943 286.408C625.943 286.898 626.113 287.314 626.455 287.656ZM636.536 308.68C636.771 308.893 637.049 309 637.368 309C637.774 309 638.083 308.893 638.297 308.68C638.531 308.445 638.649 308.136 638.649 307.752V298.12C638.649 295.999 640.368 294.28 642.489 294.28C642.83 294.28 643.097 294.184 643.289 293.992C643.502 293.778 643.609 293.522 643.609 293.224C643.609 292.904 643.502 292.648 643.289 292.456C643.097 292.242 642.83 292.136 642.489 292.136H639.385C638.978 292.136 638.649 291.806 638.649 291.4C638.649 290.397 638.798 289.512 639.097 288.744C639.417 287.954 639.886 287.346 640.505 286.92C641.145 286.472 641.944 286.248 642.905 286.248C643.267 286.248 643.566 286.141 643.801 285.928C644.035 285.714 644.153 285.448 644.153 285.128C644.153 284.808 644.035 284.541 643.801 284.328C643.566 284.114 643.267 284.008 642.905 284.008C641.454 284.008 640.227 284.328 639.225 284.968C638.222 285.586 637.465 286.461 636.952 287.592C636.441 288.722 636.184 290.034 636.184 291.528C636.184 291.864 635.912 292.136 635.576 292.136H634.136C633.795 292.136 633.518 292.242 633.305 292.456C633.112 292.648 633.017 292.904 633.017 293.224C633.017 293.522 633.112 293.778 633.305 293.992C633.518 294.184 633.795 294.28 634.136 294.28C635.268 294.28 636.184 295.197 636.184 296.328V307.752C636.184 308.136 636.302 308.445 636.536 308.68ZM657.118 308.68C657.353 308.893 657.662 309 658.046 309C658.409 309 658.697 308.893 658.91 308.68C659.145 308.445 659.262 308.136 659.262 307.752V292.744C659.262 292.36 659.145 292.061 658.91 291.848C658.697 291.613 658.409 291.496 658.046 291.496C657.662 291.496 657.353 291.613 657.118 291.848C656.905 292.061 656.798 292.36 656.798 292.744V307.752C656.798 308.136 656.905 308.445 657.118 308.68ZM656.798 287.656C657.14 287.997 657.545 288.168 658.014 288.168C658.505 288.168 658.921 287.997 659.262 287.656C659.604 287.314 659.774 286.898 659.774 286.408C659.774 285.874 659.593 285.458 659.23 285.16C658.889 284.84 658.494 284.68 658.046 284.68C657.577 284.68 657.161 284.84 656.798 285.16C656.457 285.458 656.286 285.874 656.286 286.408C656.286 286.898 656.457 287.314 656.798 287.656ZM636.206 380.04C637.507 380.786 639 381.16 640.686 381.16C642.179 381.16 643.502 380.818 644.654 380.136C645.412 379.681 646.063 379.12 646.607 378.451C646.847 378.157 647.406 378.316 647.406 378.696C647.406 380.104 647.118 381.33 646.542 382.376C645.987 383.421 645.23 384.232 644.27 384.808C643.31 385.384 642.232 385.672 641.038 385.672C639.758 385.672 638.627 385.437 637.646 384.968C636.686 384.498 635.896 383.88 635.278 383.112C635.086 382.856 634.819 382.696 634.478 382.632C634.136 382.568 633.827 382.632 633.55 382.824C633.272 383.016 633.112 383.261 633.07 383.56C633.048 383.858 633.155 384.136 633.39 384.392C634.222 385.48 635.278 386.333 636.558 386.952C637.838 387.592 639.32 387.912 641.006 387.912C642.712 387.912 644.227 387.506 645.55 386.696C646.872 385.906 647.918 384.818 648.686 383.432C649.454 382.066 649.838 380.52 649.838 378.792V372.264C649.816 370.514 649.422 368.968 648.654 367.624C647.907 366.28 646.862 365.234 645.518 364.488C644.195 363.72 642.67 363.336 640.942 363.336C639.235 363.336 637.71 363.72 636.366 364.488C635.022 365.234 633.966 366.28 633.198 367.624C632.43 368.968 632.046 370.514 632.046 372.264C632.046 373.992 632.408 375.528 633.134 376.872C633.88 378.216 634.904 379.272 636.206 380.04ZM644.27 378.088C643.31 378.642 642.2 378.92 640.942 378.92C639.683 378.92 638.563 378.642 637.582 378.088C636.6 377.512 635.832 376.722 635.278 375.72C634.723 374.717 634.446 373.565 634.446 372.264C634.446 370.962 634.723 369.81 635.278 368.808C635.832 367.784 636.6 366.994 637.582 366.44C638.563 365.864 639.683 365.576 640.942 365.576C642.2 365.576 643.31 365.864 644.27 366.44C645.251 366.994 646.019 367.784 646.574 368.808C647.128 369.81 647.406 370.962 647.406 372.264C647.406 373.565 647.128 374.717 646.574 375.72C646.019 376.722 645.251 377.512 644.27 378.088ZM620.768 421.992C620.896 422.12 621.066 422.184 621.28 422.184C621.642 422.184 622.005 422.013 622.368 421.672C622.73 421.33 623.061 420.872 623.36 420.296C623.658 419.741 623.893 419.133 624.064 418.472C624.234 417.81 624.32 417.181 624.32 416.584C624.32 415.688 624.117 414.994 623.712 414.504C623.306 413.992 622.784 413.736 622.144 413.736C621.61 413.736 621.162 413.896 620.799 414.216C620.458 414.536 620.287 414.962 620.287 415.496C620.287 415.858 620.362 416.168 620.512 416.424C620.661 416.658 620.832 416.872 621.024 417.064C621.237 417.277 621.418 417.512 621.568 417.768C621.717 418.024 621.792 418.344 621.792 418.728C621.792 419.154 621.685 419.517 621.472 419.816C621.28 420.114 621.088 420.392 620.896 420.648C620.704 420.925 620.608 421.224 620.608 421.544C620.608 421.736 620.661 421.885 620.768 421.992ZM641.585 416.008C642.929 416.776 644.444 417.16 646.129 417.16C647.793 417.16 649.287 416.776 650.609 416.008C651.953 415.24 653.009 414.194 653.777 412.872C654.567 411.528 654.983 410.024 655.025 408.36V393.256C655.025 392.872 654.908 392.573 654.673 392.36C654.439 392.125 654.14 392.008 653.777 392.008C653.415 392.008 653.116 392.125 652.881 392.36C652.647 392.573 652.529 392.872 652.529 393.256V398.952C652.529 400.098 650.763 400.791 649.745 400.264C648.593 399.645 647.303 399.336 645.873 399.336C644.231 399.336 642.759 399.73 641.457 400.52C640.156 401.288 639.121 402.344 638.353 403.688C637.607 405.032 637.233 406.546 637.233 408.232C637.233 409.938 637.617 411.464 638.385 412.808C639.175 414.152 640.241 415.218 641.585 416.008ZM649.425 414.056C648.465 414.632 647.367 414.92 646.129 414.92C644.913 414.92 643.815 414.632 642.833 414.056C641.852 413.458 641.073 412.658 640.497 411.656C639.921 410.653 639.633 409.512 639.633 408.232C639.633 406.973 639.921 405.842 640.497 404.84C641.073 403.816 641.852 403.016 642.833 402.44C643.815 401.864 644.913 401.576 646.129 401.576C647.367 401.576 648.465 401.864 649.425 402.44C650.407 403.016 651.175 403.816 651.729 404.84C652.305 405.842 652.593 406.973 652.593 408.232C652.593 409.512 652.305 410.653 651.729 411.656C651.175 412.658 650.407 413.458 649.425 414.056Z"
                      fill="#9100BA"/>
                )
                <path className={"noSelect purpleAboutBit"} fill-rule="evenodd" clip-rule="evenodd" stroke-width="1"
                      stroke="#9100BA"
                      d="M618 422C617.448 422 617 421.552 617 421C617 420.448 617.448 420 618 420H619C619.552 420 620 420.448 620 421C620 421.552 619.552 422 619 422H618Z"
                      fill="#9100BA"/>
            </>
            }

            {getLanguage() === "uk" ? <></> : <>
                <rect x="513" y="422" width="2" height="106" rx="1" transform="rotate(-90 513 422)" fill="white"/>
                <rect x="342" y="276" width="2" height="132" rx="1" transform="rotate(-90 342 276)" fill="white"/>
            </>}
        </animated.svg>
    )

}

export default Card;