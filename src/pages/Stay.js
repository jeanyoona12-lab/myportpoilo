import React from "react";
import "./stay.scss";
import mockST from "../assets/mock_stay.png";

const Stay = () => {
    return (
        <>
            <div className="stay-page">
                <img src={mockST} alt="" className="stay-image" />
                <a
                    href="https://jeanyoona12-lab.github.io/stay/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="stay-link"
                >
                    LINK ⏵
                </a>
                <p className="stay-big">STAY</p>
                <div className="box-text">
                    <div className="stay-trouble-block">
                        <h3>TROUBLE-SHOOTING</h3>
                        <div className="stay-inner-text-top">
                            <p>
                                할인과 정산 구간에서 행위 주체가 불명확해지면서
                                업무 책임이 어디에 있는지 헷갈리는 문제가
                                생겼습니다.
                            </p>
                            <p>
                                운영 서비스에서는 화면보다 흐름이 먼저고,
                                기능보다 주체가 먼저라고 생각 했기 때문에 이
                                부분을 팀원과 논의하며 다시 정리했습니다.
                            </p>
                            <p>
                                논의 과정에서 할인은 상가가 발행하고, 정산은
                                관리자가 종료하는 흐름이라는 점을 합의 했고
                                역할/주체/순서를 구분해 문제를 해결했습니다.
                            </p>
                        </div>
                        <div className="stay-inner-text-bottom">
                            <p>
                                처음엔 기능과 화면을 기준으로 잡았는데, DB에서
                                관리해야하는 단위가 UI에서 가정한 단위와 달라서
                                충돌이 생겼습니다.
                            </p>
                            <p>
                                DB는 발행/사용/마감처럼 절차 단위로 움직였지만
                                UI는 화면 단위로 묶여있어 서로 맞지 않았습니다.
                            </p>
                            <p>
                                DB 관리자 분과 절차를 다시 정리하면서 데이터
                                기준으로 UI를 쪼갰고 그제서야 흐름이 제대로
                                보였습니다.
                            </p>
                            <p>
                                다음에는 데이터를 먼저 잡고 UI는 그 흐름을
                                따라가도록 설계하고 싶습니다.
                            </p>
                        </div>
                    </div>
                    <div className="stay-next-block">
                        <h3>NEXT ITETATION</h3>
                        <div className="stay-inner-text-top">
                            <p>
                                운영 흐름을 개선 할 필요가 있다고 생각합니다.
                                운영 절차를 그냥 페이지로 나누는 것보다 상태가
                                넘어가는 과정이 보였으면 좋겠다는 생각이
                                들었습니다.
                            </p>
                            <p>
                                지금은 방문 → 할인 → 정산이 따로 있는 느낌이라
                                흐름이 잘리지 않게 작은 의미나 피드백을 넣을 수
                                있을 것 같습니다.
                            </p>
                        </div>
                        <div className="stay-inner-text-bottom">
                            <p>
                                승인/정산이 강조되었는데 둘 다 같은 비중으로
                                보여서 시선이 한 번에 잡히지 않았습니다.
                            </p>
                            <p>
                                우선 순위가 보이도록 인터랙션을 더 정리하고
                                싶습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Stay;
