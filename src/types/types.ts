export type HomeSliceType = {
  home: {
    toDay: string;
    startButtonDesable: boolean;
    toggleLoading: boolean;
    CompletedModalState: {
      toggleModal: boolean;
      message: string;
    };
    ErrorModalState: {
      toggleModal: boolean;
      message: string;
    };
    userPaidData: {
      [x: string]: number;
    };
  };
};

export type RegistData = {
  registar: {
    registarDataState: {
      registarData: {
        name: string;
        furigana: string;
        gender_id: string;
        birthday: string;
        mailaddress: string;
        phone: string;
        password: string;
        configrationPass: string;
      };
      errors: {
        birthday: string;
        configrationPass: string;
        furigana: string;
        gender: string;
        mailaddress: string;
        name: string;
        password: string;
        phone: string;
      };
      inputPassState: {
        text: string;
        type: string;
        toggle: boolean;
      };
    };
  };
};

export type ConfirmationDataType = {
  confirmation: {
    confirmationData: {
      type: string;
      name: string;
      value: string;
    }[];
    inputPassState: {
      text: string;
      type: string;
      toggle: boolean;
    };
    sendData: {
      name: string;
      furigana: string;
      gender_id: number;
      birthday: string;
      mailaddress: string;
      phone: string;
      password: string;
    };
    error: string;
  };
};

export type attendanceDataType = {
  attendanceData: {
    payds: {
      title: string;
      value: string;
    }[];
  };
};

export type DayScheduleTypes = {
  DayAttendanceDataType: {
    id: number;
    user_id: string;
    date: string;
    approvel_request_state: boolean;
    approvel_state: boolean;
    regist_state: string;
    attendance_type: string;
    default_start_time: string;
    default_end_time: string;
    start_time: string;
    end_time: string;
    attendance_state: string;
    paid_time: string;
    break_time: string;
    lose_time: string;
    over_time: string;
    total_time: string;
    comment: string;
    selected: boolean;
  };
};
