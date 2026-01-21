import React from "react";
import "./personal.scss";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

const Personal = () => {
    const { type } = useParams();
    const item = data.items.find((i) => i.type === type);

    if (!item) return <div>not found</div>;

    return (
        <div className="personal-page"> 
            {/* <div className="image-section">
                <img src={item.image} alt="" />
            </div> */}
            <div className="mockup-wrap">
                    {item.mockups?.map((m, i) => (
                        <span key={i} className={`mockup ${m.device}`}>
                            <img src={m.src} alt="" />
                        </span>
                    ))}
                </div>

            <div className="box-text">
                
                {/* {item.panel?.["text-top"]?.map((t, i) => (
                    <p key={`top-${i}`}>{t}</p>
                ))} */}

                {/* 기존 bottom */}
                {/* {item.panel?.["text-bottom"]?.map((t, i) => (
                    <p key={`bottom-${i}`}>{t}</p>
                ))} */}

                {/* NEXT */}
                {item.next && item.next.length > 0 && (
                    <div className="next-block">
                        <h3>NEXT ITETATION</h3>
                        {item.next.map((t, i) => (
                            <p key={`next-${i}`}>{t}</p>
                        ))}
                    </div>
                )}

                {/* TROUBLE */}
                {item.troubleshooting && item.troubleshooting.length > 0 && (
                    <div className="trouble-block">
                        <h3>TROUBLE-SHOOTING</h3>
                        {item.troubleshooting.map((t, i) => (
                            <p key={`ts-${i}`}>{t}</p>
                        ))}
                    </div>
                )}
            </div>

            <div className="text-hero">
                <p className="hero-title">{item.title.main}</p>
                <p className="hero-sub">{item.title.sub}</p>
            </div>
        </div>
    );
};

export default Personal;
