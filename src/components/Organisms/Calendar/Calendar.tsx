import FullCalendar from "@fullcalendar/react";
// ↓　表示するためのプラグイン
import dayGridPlugin from "@fullcalendar/daygrid";
// ↓　日本語表記にするためのプラグイン
import jaLocale from "@fullcalendar/core/locales/ja";
// ↓　スタイルを上書きするためのツール。cssではなく、jsでスタイル指定できる。
import interactionPlugin from "@fullcalendar/interaction";
import styled from "@emotion/styled";
import styles from "./Calendar.module.css";
import { getDayAttendanceData } from "../../../features/DayScheduleSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { homeSliceReducers } from "../../../features/homeSlice";
import { useLocation } from "react-router-dom";

function Calendar() {
  const dispatch = useDispatch();
  const Location = useLocation();

  useEffect(() => {
    const setBgColor = document.querySelector(".setBgColor");
    if (setBgColor !== null) setBgColor.classList.remove("setBgColor");

    const setTextColor = document.querySelector(".setTextColor");
    if (setTextColor !== null) setTextColor.classList.remove("setTextColor");

    const todayElWrapper = document.querySelector(
      `[data-date="${Location.state.toDay}"]`
    );
    if (todayElWrapper !== null) todayElWrapper.classList.add("setBgColor");

    const todayEl = document.querySelector(
      `[aria-label="${Location.state.toDay.slice(0, 4)}年${Number(
        Location.state.toDay.slice(5, 7)
      )}月${Number(Location.state.toDay.slice(8, 10))}日"]`
    );

    if (todayEl !== null) todayEl.classList.add("setTextColor");
  }, [Location.state.toDay]);

  const handleDateClick = async (event: any) => {
    dispatch(homeSliceReducers.toggleLoading(false));
    const setBgColor = document.querySelector(".setBgColor");
    if (setBgColor !== null) setBgColor.classList.remove("setBgColor");

    const setTextColor = document.querySelector(".setTextColor");
    if (setTextColor !== null) setTextColor.classList.remove("setTextColor");

    event.dayEl.classList.add("setBgColor");
    event.dayEl.querySelector("a").classList.add("setTextColor");
    const sendData = {
      toDay: `${event.dateStr}`,
    };
    await dispatch(getDayAttendanceData(sendData));
    dispatch(homeSliceReducers.toggleLoading(true));
  };

  return (
    <div className={styles.calendar_component_wrapper}>
      <StyleWrapper className={styles.StyleWrapper}>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          initialDate={Location.state.toDay}
          locales={[jaLocale]}
          locale="ja"
          headerToolbar={{ left: "prev", center: "title", right: "next" }}
          dateClick={(event) => handleDateClick(event)}
        />
      </StyleWrapper>
    </div>
  );
}

export const StyleWrapper = styled.div`
  .setBgColor {
    background-color: #fbd13d !important;
  }
  .setTextColor {
    color: #ff0000;
  }
  #D04F2F .fc {
    display: grid;
    grid-template-rows: 12% 88%;
    height: auto;
  }
  .fc-view-harness.fc-view-harness-active {
    height: auto !important;
  }
  .css-1v5p8ik .fc .fc-view-harness {
    height: auto;
  }
  // 月切り替え
  .fc .fc-toolbar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: end;
    justify-content: space-around;
    height: auto;
    background-color: #7e262b;
    margin-bottom: 0;
  }
  .fc-toolbar-chunk {
    display: grid;
    align-items: center;
    height: auto;
  }
  .fc-toolbar-title {
    color: #fbd13d;
    font-size: 0.8em;
  }
  .fc-button {
    display: grid;
    background-color: transparent;
    border-color: transparent;
    color: #f9f4fc;
    padding: 0;
    z-index: 1;
  }
  .fc-button:hover {
    background-color: transparent;
    color: #fbd13d;
    border: 0em solid;
  }
  .fc .fc-button .fc-icon {
    font-size: 1.3em;
  }

  // 曜日
  .fc-col-header-cell-cushion {
    color: #7e262b;
    font-size: 0.8em;
  }
  .fc-theme-standard th {
    border: 0.15em solid #583225;
  }
  .fc-col-header {
    width: 100%;
    z-index: 4;
  }
  td.fc-day.fc-day-sat.fc-day-future.fc-daygrid-day {
    background-color: #a3dee2;
  }
  td.fc-day.fc-day-sat.fc-day-past.fc-daygrid-day {
    background-color: #a3dee2;
  }
  td.fc-day.fc-day-sun.fc-day-future.fc-daygrid-day {
    background-color: #ff0000;
  }
  td.fc-day.fc-day-sun.fc-day-past.fc-daygrid-day {
    background-color: #ff0000;
  }

  // 日付
  .fc-daygrid-day-top {
    display: block;
    width: 100%;
    text-align: center;
  }

  .fc-day {
    background-color: #faf9a6;
  }
  .fc .fc-daygrid-day.fc-day-today {
    background-color: #faf9a6;
  }
  .fc .fc-daygrid-day-number {
    cursor: pointer;
    padding: 0%;
  }
  .fc-daygrid-day-events {
    display: none;
  }
  .fc .fc-daygrid-day-frame {
    min-height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #ffffff;
    position: relative;
    -webkit-text-stroke: 0.055em #583225;
    font-size: 0.729em;
    padding: 2% 0;
  }
  .fc-theme-standard td {
    border-left: 0.15em solid #583225;
    border-bottom: 0.15em solid #583225;
    border-right: 0.15em solid #583225;
  }
  .fc-theme-standard td:hover {
    background-color: #fbd13d !important ;
  }
  .fc-scrollgrid-sync-inner {
    height: auto;
    display: grid;
  }
  .fc .fc-view-harness {
    position: unset;
  }
  .fc .fc-view-harness-active > .fc-view {
    inset: 0px;
    position: unset;
    height: auto;
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
    height: auto;
  }
  .fc .fc-daygrid-body {
    width: 100% !important;
    height: auto;
    position: unset;
  }
  .fc .fc-scrollgrid-section-body table {
    border-bottom-style: hidden;
    height: auto !important;
    width: 100% !important;
  }
  .fc-scrollgrid-sync-table {
    width: 100%;
    height: auto;
  }
  .fc-dayGridMonth-view .fc-view .fc-daygrid {
    height: auto;
  }
  .fc-scroller .fc-scroller-liquid-absolute {
    height: auto;
  }
  .fc .fc-scrollgrid-section table {
    height: auto !important;
    width: 100% !important;
  }
  .fc .fc-scrollgrid table {
    border-left-style: hidden;
    border-right-style: hidden;
    border-top-style: hidden;
    border-bottom-style: hidden;
  }
`;

export default Calendar;
