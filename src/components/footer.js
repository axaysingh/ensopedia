import React from 'react';
import * as Icon from 'react-feather';

const icons = [
    {
        icon: <Icon.Download />,
        href: 'https://rebrand.ly/h4dzvs2',
        color: '#eff7ff',
        bgColor: '#000000',
        tooltip: 'Download Application'
    },    
    {
        icon: <Icon.Twitter />,
        href: 'https://twitter.com/ensopedia',
        color: 'rgba(0,123,255,.6)',
        bgColor: 'rgba(0,123,255,.0627451)',
        tooltip: 'Follow us on Twitter!'
    },
    {
        icon: <Icon.ThumbsUp />,
        href: 'https://facebook.com/ensopedia',
        color: '#4c75f2',
        bgColor: '#4c75f210',
        tooltip: 'Connect on Facebook!'
    }
];
function Footer() {
    const onClick = (e) => {
        e.preventDefault();
    };
    return (
        <div className="footer-wrapper fadeInUp" style={{ animationDelay: '2s',marginTop:'-4%' }}>
            <div className="footer-obj">Stay Home | Stay Safe | Stay Healthy | Stay Lives<br/><br/><span class="link"><a>Ensopedia</a></span></div>
            <div className="footer-social" style={{marginTop:'-3%' }}>
                {icons.map((icon, index) => (
                    <a
                        href={window.innerWidth <= 768 ? '#' : icon.href}
                        target="_blank"
                        onClick={window.innerWidth <= 768 && onClick}
                        rel="noopener noreferrer"
                        key={index}
                    >
                        <div className="tooltip" style={{ color: icon.color, backgroundColor: icon.bgColor }}>
                            <span>{icon.icon}</span>
                            <span
                                className={`tooltiptext tooltip${index}`}
                                style={{
                                    color: icon.color,
                                    backgroundColor: icon.bgColor,
                                    textDecoration: 'none'
                                }}
                                onClick={() => window.open(icon.href, '_blank')}
                                rel="noopener noreferrer"
                            >
                                {icon.tooltip}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Footer;