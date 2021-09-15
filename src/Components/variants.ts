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
    y: 100,
  },
  visible: {
    y: 0,

    transition: {
      duration: 0.4,
      type: "spring",
    },
  },

  exit: {
    y: 100,

    transition: {
      duration: 0.4,
      type: "spring",
    },
  },
};

export const container = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1.5,
      delay: 0.5,
      staggerChildren: 0.3,
    },
  },

  exit: {
    opacity: 0,
  },
};

export const Item = {
  initial: {
    y: 100,
  },
  visible: {
    y: 0,

    transition: {
      duration: 1.5,
    },
  },
};

export const deleteAni = {
  initial: {
    scale: 1,
  },
  visible: {
    scale: 1,
  },
  exit: {
    scale: 0,
    transition: {
      duration: 1.5,
      delay: 0.2,
    },
  },
};

export const mid = {
  initial: {
    opacity: 0,
    height: 0,
  },
  visible: {
    opacity: 1,
    height: "auto",
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const IconAni = {
  initial: {
    pathLength: 0,
    fill: "none",
  },
  visible: {
    fill: "var(--AddIcon)",
    pathLength: 1,
    transition: {
      delay: 4,
    },
  },
};
