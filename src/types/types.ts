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
    RegistedWorkTimes: {
      startTime: string;
      endTime: string;
    };
    loginUser: string;
  };
};
