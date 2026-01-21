import React from "react";
import mockRT from "../assets/mock_reste.png";
import "./resty.scss";

const Resty = () => {
    return (
        <>
            <div className="reste-page">
                <img src={mockRT} alt="" className="reste-image" />
                <p className="reste-title">RESTE</p>
                <div className="box-text">
                    <div className="reste-trouble-block">
                        <h3>TROUBLE-SHOOTING</h3>
                        <div className="reste-inner-text-top">
                            <p>
                                레스티는 제품의 질감, 재질을 보여주는 게
                                핵심이라 3D뷰어를 넣었는데 처음 렌더링 했을 때 모델이 회전축이 어긋난
                                상태로 떠있었습니다.
                            </p>
                            <p>그래서 사용자가 보기에 어려움이 있었고,</p>
                            <p>
                                모델의 중심축을 orbitCintrill,Camera,model
                                pivot이 각자 다른 좌표계를 기준으로 움직이는 상황을 발견했습니다.
                            </p>
                            <p>
                                해결은 모델의 중심축을 재조정하고 카메라
                                orbit제한을 걸어서 방향을 고정하는 형식으로 처리 했습니다.
                            </p>
                        </div>
                        <div className="reste-inner-text-bottom">
                            <p>
                                제품 카드리스트를 출력하는 과정에서 협업 중
                                소통오류로 데이터를 컴포넌트 내부에 직접
                            </p>
                            <p>넣는 방식으로 구현되었습니다.</p>
                            <p>
                                이 방식은 화면만 빠르게 만들기에는 편하지만 제품
                                추가/수정/필터/디테일 연결이
                            </p>
                            <p>불가능해지는 구조였습니다.</p>
                            <p>
                                그래서 더미데이터를 모두 삭제하고 배열로 관리한
                                뒤 map으로 렌더링 하는 방식으로 재설계 했습니다.
                            </p>
                            <p>
                                그 결과 카드가 데이터 기반으로 연결되면서
                                유지보수가 간편해지게 되었고,
                            </p>
                            <p>
                                이 과정에서 협업에서의 소통이 코드보다 먼저라는
                                점을 깨달았습니다.
                            </p>
                        </div>
                    </div>
                    <div className="reste-next-block">
                        <h3>NEXT ITETATION</h3>
                        <div className="reste-inner-text-top">
                            <p>
                                라이트모드와 다크모드가 페이지 단위로 구분되어 있어서 모드에 따라 로고 색도 함께 바뀌면 좋을 것 같습니다.
                            </p>
                            <p>폰트 사이즈를 조금 더 조정하고 고딕계열로 정리하면 전체가 정돈되고 깔끔해 보일 것 같습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resty;
