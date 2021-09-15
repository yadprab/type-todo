export const wrap = {
  initial: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 1.5,
      delayChildren: 0.2,
    },
  },

  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 1.5,
      delay: 0.2,
    },
  },
};

export const wrap2 = {
  initial: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      duration: 1.5,
      delayChildren: 0.2,
      delay: 0.2,
    },
  },

  exit: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 1.5,
      delay: 0.2,
    },
  },
};

export const IconWrap = {
  initial: {
    y: 100,
  },
  visible: {
    y: 0,
    transition: {
      delay: 0.1,
    },
  },
  exit: {
    y: 100,
    transition: {
      delay: 0.2,
    },
  },
};

export const filter = {
  initial: {
    y: 150,
  },
  visible: {
    y: 0,

    transition: {
      duration: 0.5,
     
      delay: 0.2,
    },
  },

  exit: {
    y: 150,

    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};
