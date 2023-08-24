import FullCalendar from "@fullcalendar/react";
// ↓　表示するためのプラグイン
import dayGridPlugin from "@fullcalendar/daygrid";
// ↓　日本語表記にするためのプラグイン
import jaLocale from "@fullcalendar/core/locales/ja";
// ↓　スタイルを上書きするためのツール。cssではなく、jsでスタイル指定できる。
import interactionPlugin from "@fullcalendar/interaction";
import styled from "@emotion/styled";
import styles from "./Calendar.module.css";
import Img from "../../atoms/Img/Img";

function Calendar() {
  const handleDateClick = () => {
    alert("test");
  };
  return (
    <div className={styles.calendar_component_wrapper}>
      <div className={styles.calendar_frame}>
        <Img
          alt="タイトルロゴ"
          src="/DaySchedulePage/calendar_wrapp.png"
          style=""
        />
      </div>
      <StyleWrapper className={styles.StyleWrapper}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locales={[jaLocale]}
          locale="ja"
          headerToolbar={{ left: "prev", center: "title", right: "next" }}
          dateClick={() => handleDateClick()}
        />
      </StyleWrapper>
    </div>
  );
}

export const StyleWrapper = styled.div`
  .fc {
    display: grid;
    grid-template-rows: 10% 90%;
    height: 100%;
    font-size: 1em;
  }
  .fc div:nth-of-type(2) {
    height: 100% !important;
  }
  .css-1v5p8ik .fc .fc-view-harness {
    height: 100%;
  }
  .fc .fc-toolbar {
    align-items: center;
    display: flex;
    justify-content: space-around;
    height: 100%;
    margin-bottom: 0;
  }
  .fc .fc-button-primary {
    background-color: transparent;
    border-color: transparent;
    color: #d04f2f;
  }
  .fc-toolbar-title {
    color: #d04f2f;
    -webkit-text-stroke: 0.05rem #583225;
  }
  .fc-col-header {
    width: 100%;
  }
  .fc-col-header-cell-cushion {
    color: #7e262b;
    font-size: 1.3rem;
  }
  .fc-theme-standard th {
    border: 0.2rem solid #583225;
  }
  .fc-day-sun {
    background-color: red;
  }
  .fc-day-sat {
    background-color: #a3dee2;
  }
  .fc-theme-standard td {
    border-left: 0.2rem solid #583225;
    border-bottom: 0.2rem solid #583225;
    border-right: 0.2rem solid #583225;
  }
  .fc .fc-daygrid-day-frame {
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    color: #ffffff;
    position: relative;
    -webkit-text-stroke: 0.07rem #583225;
  }
  .fc .fc-view-harness {
    position: unset;
  }
  .fc .fc-view-harness-active > .fc-view {
    inset: 0px;
    position: unset;
    height: 100%;
  }
  .fc .fc-scroller-harness {
    position: unset;
  }
  .fc .fc-scroller {
    position: unset;
  }
  .fc-col-header {
    width: 100%;
  }
  .fc .fc-scroller-liquid-absolute {
    position: unset;
    height: 100%;
  }
  .fc .fc-daygrid-body {
    width: 100% !important;
    height: 100%;
    position: unset;
  }
  .fc .fc-scrollgrid-section-body table {
    border-bottom-style: hidden;
    height: 100% !important;
    width: 100% !important;
  }
  .fc-scrollgrid-sync-table {
    width: 100%;
    height: 100%;
  }
  .fc-dayGridMonth-view .fc-view .fc-daygrid {
    height: 100%;
  }
  .fc-scroller .fc-scroller-liquid-absolute {
    height: 100%;
  }
  .fc .fc-scrollgrid-section table {
    height: 100%;
    width: 100% !important;
  }
  .fc .fc-scrollgrid table {
    border-left-style: hidden;
    border-right-style: hidden;
    border-top-style: hidden;
    border-bottom-style: hidden;
  }
  .fc .fc-daygrid-day-number {
    cursor: pointer;
  }
`;

export default Calendar;
