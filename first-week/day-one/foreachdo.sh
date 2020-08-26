function loadforeachdo() {
  function fordirdo() {
    for d in *; do
      [ -d "${d}" ] && eval "${1:-'echo'} ${3}${d}${4} ${2}"
    done
  }

  function fordotdirdo() {
    for d in .*; do
      [ -d "${d}" ] && eval "${1:-'echo'} ${3}${d}${4} ${2}"
    done
  }

  function foreachdirdo() {
    for d in .* *; do
      [ -d "${d}" ] && eval "${1:-'echo'} ${3}${d}${4} ${2}"
    done
  }

  function foreachfile() {
    for f in *; do
      [ -f "${f}" ] && eval "${1:-'echo'} ${3}${f}${4} ${2}"
    done
  }

  function foreachline() {
    while read line; do
      eval "${1:-'echo'} ${3}${line}${4} ${2}"
    done
  }
}
loadforeachdo

function unsetforeachdoall() {
  unsetforeachdo --all
}

function unsetforeachdo() {
  if [[ "$1" = "all" || "$1" = "--all" ]]; then
    unset -f loadforeachdo
    unset -f unsetforeachdo
    unset -f unsetforeachdoall
  fi
  unset -f fordirdo 2>/dev/null
  unset -f fordotdirdo 2>/dev/null
  unset -f foreachdirdo 2>/dev/null
  unset -f foreachfile 2>/dev/null
  unset -f foreachline 2>/dev/null
}
