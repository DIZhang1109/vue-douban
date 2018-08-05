<template>
  <div class="is-center">
    <p aria-label="CodePen" class="has-text-centered">
      <span data-text="D">D</span>
      <span data-text="O">O</span>
      <span data-text="U">U</span>
      <span data-text="B">B</span>
      <span data-text="A">A</span>
      <span data-text="N">N</span>
      <br>
      <span data-text="V">V</span>
      <span data-text="U">U</span>
      <span data-text="E">E</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
p {
  color: white;
  font-weight: 700;

  & span {
    display: inline-block;
    position: relative;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-perspective: 500;
    perspective: 500;
    -webkit-font-smoothing: antialiased;
  }

  & span:before,
  span:after {
    display: none;
    position: absolute;
    top: 0;
    left: -1px;
    -webkit-transform-origin: left top;
    transform-origin: left top;
    -webkit-transition: all ease-out 0.3s;
    transition: all ease-out 0.3s;
    content: attr(data-text);
  }

  & span::before {
    z-index: 1;
    color: rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(1.1, 1) skew(0deg, 20deg);
    transform: scale(1.1, 1) skew(0deg, 20deg);
  }

  & span::after {
    z-index: 2;
    color: #209cee;
    text-shadow: -1px 0 1px #209cee, 1px 0 1px rgba(0, 0, 0, 0.8);
    -webkit-transform: rotateY(-40deg);
    transform: rotateY(-40deg);
  }

  & span:hover::before {
    -webkit-transform: scale(1.1, 1) skew(0deg, 5deg);
    transform: scale(1.1, 1) skew(0deg, 5deg);
  }

  & span:hover::after {
    -webkit-transform: rotateY(-10deg);
    transform: rotateY(-10deg);
  }

  & span + span {
    margin-left: 0.3em;
  }
}

@media (min-width: 20em) {
  p {
    font-size: 2em;

    & span::before,
    span::after {
      display: block;
    }
  }
}

@media (min-width: 30em) {
  p {
    font-size: 3em;
  }
}

@media (min-width: 40em) {
  p {
    font-size: 5em;
  }
}

@media (min-width: 60em) {
  p {
    font-size: 8em;
  }
}
</style>
