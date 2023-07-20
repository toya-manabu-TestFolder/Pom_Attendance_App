import RegistarInputSection from "../../Organisms/Registar_Input_Section/RegistarInputSection";
import Button from "../../atoms/button/Button";
import H2_Ver1 from "../../atoms/h2/ver.1/H2";
import "./RegistarPageTmp.css";
import "../../../css/index.css";

type Props = {};

export default function RegistarPageTmp({}: Props) {
  function test() {
    console.log("OK");
  }
  return (
    <div className="RegistarPageTmp-wrapp">
      <div className="H2_Ver1-wrapp">
        <H2_Ver1 text="新規会員登録" />
      </div>
      <div className="RegistarInputSection-wrapp">
        <RegistarInputSection onClickFun={() => {}} />
      </div>
      <div className="Button-wrapp">
        <Button
          text="登録情報を確認する"
          test={() => {
            test();
          }}
        />
      </div>
    </div>
  );
}
