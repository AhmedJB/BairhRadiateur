export const RegisterVariants = {
    start: {
      opacity: 0,
      x: "-100%",
	  transition: {
		duration : .5
	}
    },
    enter: {
      opacity: 1,
      x: 0,
	  transition: {
		  delay:.5,
		  duration : .5
	  }
    },
  };

export const TabVariant = {
    start: {
      opacity: 0,
      x: "-100%",
	  transition: {
		duration : .5
	}
    },
    enter: {
      opacity: 1,
      x: 0,
	  transition: {
		  delay:.5,
		  duration : .5
	  }
    },
  };

export  const LoginVariants = {
    start: {
      opacity: 0,
	  position: "absolute",
	  top:"50%",
	  y : "-50%",
      x: "100%",
	  transition: {
		  y : {
			  duration : 0
		  },
      top: {
        duration:0
      },
		duration : .5
	}
    },
    enter: {
      opacity: 1,
	  position: "relative",
	  top:0,
	  y : 0,
      x: 0,
	  transition: {
		  y : {
			duration : 0
		  },
		  delay:.5,
		  duration : .5
	  }
    },
  };