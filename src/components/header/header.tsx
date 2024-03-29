export default function Home() {
  return (
    <header className="header">
      <div className="header__button-wrapper">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.7676 12.3203H5.76758"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.7676 19.3203L5.76758 12.3203L12.7676 5.32031"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <svg width="47" height="35" viewBox="0 0 47 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient
            id="glow"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(14.8759 0 0 14.7987 18.065 14.797)"
          >
            <stop offset="0" stopColor="#fff" stopOpacity=".3"/>
            <stop offset=".962" stopColor="#fff" stopOpacity="0"/>
          </radialGradient>

          <linearGradient
            id="gradient"
            x1="31.503"
            y1="31.714"
            x2="31.16"
            y2="3.351"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#242D7C"/>
            <stop offset="1" stopColor="#00AEEF"/>
          </linearGradient>
        </defs>
        
        <path
          d="M18.072 29.603c8.218 0 14.879-6.627 14.879-14.802C32.95 6.627 26.289 0 18.072 0 9.855 0 3.194 6.627 3.194 14.801c0 8.175 6.661 14.802 14.878 14.802z" fill="#0"></path><path d="M18.119 17.567a2.772 2.772 0 0 0 2.779-2.765 2.772 2.772 0 0 0-2.78-2.765 2.772 2.772 0 0 0-2.779 2.765 2.772 2.772 0 0 0 2.78 2.765zM13.128 25.54v8.355h-4.1v-7.76c0-1.68-1.059-2.474-2.38-2.474-1.504 0-2.548.87-2.548 2.795v7.424H0V14.848h4.1v6.72c.737-1.008 2.103-1.664 3.915-1.664 2.764.015 5.113 1.97 5.113 5.636zM15.938 20.3h4.1v13.61h-4.1V20.3zM36.175 25.54v8.356h-4.1v-7.76c0-1.68-1.059-2.474-2.38-2.474-1.504 0-2.548.87-2.548 2.795v7.423h-4.1V20.27h4.1v1.284c.737-1.008 2.103-1.665 3.915-1.665 2.764.03 5.113 1.985 5.113 5.651zM44.19 24.212v4.811c0 1.177 1.014 1.284 2.81 1.177v3.696c-5.359.55-6.925-1.054-6.925-4.873v-4.811H37.88v-3.91h2.196V17.72l4.1-1.222v3.803h2.81v3.91H44.19z"
          fill="url(#gradient)"
        />
        </svg>
    </header>
  );
}
