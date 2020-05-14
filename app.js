function exec() {
  const a = parseInt(prompt('Inserisci a..', 0));
  const b = parseInt(prompt('Inserisci b..', 0));
  const c = parseInt(prompt('Inserisci c..', 0));

  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
    writeEq(a, b, c);
    if (a == 0) {
      if (b == 0) {
        document.getElementById('eq').innerHTML = '?';
        document.getElementById('solution').innerHTML = 'invalid input';
      } else {
        document.getElementById('solution').innerHTML =
          "L'equazione e' di primo grado!";
      }
    } else if (b == 0) {
      document.getElementById('solution').innerHTML = 'invalid input';
      document.getElementById('eq').innerHTML = '?';
    } else {
      const delta = b * b - 4 * a * c;
      if (delta < 0) {
        document.getElementById('solution').innerHTML = 'Equazione impossibile';
      } else if (delta == 0) {
        document.getElementById('solution').innerHTML = `Risultato: ${-b /
          (2 * a).toFixed(2)}`;
      } else {
        document.getElementById('solution').innerHTML = `Soluzioni: ${(
          (-b + Math.sqrt(delta)) /
          (2 * a)
        ).toFixed(2)}, ${((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2)}`;
      }
    }
  } else {
    document.getElementById('eq').innerHTML = '?';
    document.getElementById('solution').innerHTML = 'invalid input';
  }
}

function writeEq(a, b, c) {
  if (a > 0) {
    if (a == Math.abs(1)) {
      if (b > 0) {
        if (b == Math.abs(1)) {
          if (c > 0) {
            document.getElementById('eq').innerHTML = `xx + x + ${c}`;
          } else if (c == 0) {
            document.getElementById('eq').innerHTML = `xx + x`;
          } else {
            document.getElementById('eq').innerHTML = `xx + x ${c}`;
          }
        } else {
          if (c > 0) {
            document.getElementById('eq').innerHTML = `xx + ${b}x + ${c}`;
          } else if (c == 0) {
            document.getElementById('eq').innerHTML = `xx + ${b}x`;
          } else {
            document.getElementById('eq').innerHTML = `xx + ${b}x ${c}`;
          }
        }
      } else if (b == 0) {
        if (c > 0) {
          document.getElementById('eq').innerHTML = `xx + ${c}`;
        } else if (c == 0) {
          document.getElementById('eq').innerHTML = `xx`;
        } else {
          document.getElementById('eq').innerHTML = `xx + ${b}x ${c}`;
        }
      } else if (b == -1) {
        if (c > 0) {
          document.getElementById('eq').innerHTML = `xx -x + ${c}`;
        } else if (c == 0) {
          document.getElementById('eq').innerHTML = `xx -x`;
        } else {
          document.getElementById('eq').innerHTML = `xx -x ${c}`;
        }
      } else {
        if (c > 0) {
          document.getElementById('eq').innerHTML = `xx ${b}x + ${c}`;
        } else if (c == 0) {
          document.getElementById('eq').innerHTML = `xx ${b}x`;
        } else {
          document.getElementById('eq').innerHTML = `xx ${b}x ${c}`;
        }
      }
    } else {
      if (b > 0) {
        if (b == Math.abs(1)) {
          if (c > 0) {
            document.getElementById('eq').innerHTML = `${a}xx + x + ${c}`;
          } else if (c == 0) {
            document.getElementById('eq').innerHTML = `${a}xx + x`;
          } else {
            document.getElementById('eq').innerHTML = `${a}xx + x ${c}`;
          }
        } else {
          if (c > 0) {
            document.getElementById('eq').innerHTML = `${a}xx + ${b}x + ${c}`;
          } else if (c == 0) {
            document.getElementById('eq').innerHTML = `${a}xx + ${b}x`;
          } else {
            document.getElementById('eq').innerHTML = `${a}xx + ${b}x ${c}`;
          }
        }
      } else if (b == 0) {
        if (c > 0) {
          document.getElementById('eq').innerHTML = `${a}xx + ${c}`;
        } else if (c == 0) {
          document.getElementById('eq').innerHTML = `${a}xx`;
        } else {
          document.getElementById('eq').innerHTML = `${a}xx + ${b}x ${c}`;
        }
      } else if (b == -1) {
        if (c > 0) {
          document.getElementById('eq').innerHTML = `${a}xx -x + ${c}`;
        } else if (c == 0) {
          document.getElementById('eq').innerHTML = `${a}xx -x`;
        } else {
          document.getElementById('eq').innerHTML = `${a}xx -x ${c}`;
        }
      } else {
        if (c > 0) {
          document.getElementById('eq').innerHTML = `${a}xx ${b}x + ${c}`;
        } else if (c == 0) {
          document.getElementById('eq').innerHTML = `${a}xx ${b}x`;
        } else {
          document.getElementById('eq').innerHTML = `${a}xx ${b}x ${c}`;
        }
      }
    }
  } else if (a == 0) {
    if (b > 0) {
      if (b == Math.abs(1)) {
        if (c > 0) {
          document.getElementById('eq').innerHTML = `x + ${c}`;
        } else if (c == 0) {
          document.getElementById('eq').innerHTML = `x`;
        } else {
          document.getElementById('eq').innerHTML = `x ${c}`;
        }
      } else {
        if (c > 0) {
          document.getElementById('eq').innerHTML = `${b}x + ${c}`;
        } else if (c == 0) {
          document.getElementById('eq').innerHTML = `${b}x`;
        } else {
          document.getElementById('eq').innerHTML = `${b}x ${c}`;
        }
      }
    } else if (b == 0) {
      document.getElementById('eq').innerHTML = `${c}`;
    } else {
      if (c > 0) {
        document.getElementById('eq').innerHTML = `${b}x + ${c}`;
      } else if (c == 0) {
        document.getElementById('eq').innerHTML = `${b}x`;
      } else {
        document.getElementById('eq').innerHTML = `${b}x ${c}`;
      }
    }
  } else if (a == -1) {
    if (b > 0) {
      if (b == Math.abs(1)) {
        if (c > 0) {
          document.getElementById('eq').innerHTML = `- xx + x + ${c}`;
        } else if (c == 0) {
          document.getElementById('eq').innerHTML = `- xx + x`;
        } else {
          document.getElementById('eq').innerHTML = `- xx + x ${c}`;
        }
      } else {
        if (c > 0) {
          document.getElementById('eq').innerHTML = `- xx + ${b}x + ${c}`;
        } else if (c == 0) {
          document.getElementById('eq').innerHTML = `- xx + ${b}x`;
        } else {
          document.getElementById('eq').innerHTML = `- xx + ${b}x ${c}`;
        }
      }
    } else if (b == 0) {
      if (c > 0) {
        document.getElementById('eq').innerHTML = `- xx + ${c}`;
      } else if (c == 0) {
        document.getElementById('eq').innerHTML = `- xx`;
      } else {
        document.getElementById('eq').innerHTML = `- xx ${c}`;
      }
    } else if (b == -1) {
      if (c > 0) {
        document.getElementById('eq').innerHTML = `- xx - x + ${c}`;
      } else if (c == 0) {
        document.getElementById('eq').innerHTML = `- xx - x`;
      } else {
        document.getElementById('eq').innerHTML = `- xx - x ${c}`;
      }
    } else {
      if (c > 0) {
        document.getElementById('eq').innerHTML = `- xx ${b}x + ${c}`;
      } else if (c == 0) {
        document.getElementById('eq').innerHTML = `- xx ${b}x`;
      } else {
        document.getElementById('eq').innerHTML = `- xx ${b}x ${c}`;
      }
    }
  } else {
    if (b > 0) {
      if (b == Math.abs(1)) {
        if (c > 0) {
          document.getElementById('eq').innerHTML = `${a}xx + x + ${c}`;
        } else if (c == 0) {
          document.getElementById('eq').innerHTML = `${a}xx + x`;
        } else {
          document.getElementById('eq').innerHTML = `${a}xx + x ${c}`;
        }
      } else {
        if (c > 0) {
          document.getElementById('eq').innerHTML = `${a}xx + ${b}x + ${c}`;
        } else if (c == 0) {
          document.getElementById('eq').innerHTML = `${a}xx + ${b}x`;
        } else {
          document.getElementById('eq').innerHTML = `${a}xx + ${b}x ${c}`;
        }
      }
    } else if (b == 0) {
      if (c > 0) {
        document.getElementById('eq').innerHTML = `${a}xx + ${c}`;
      } else if (c == 0) {
        document.getElementById('eq').innerHTML = `${a}xx`;
      } else {
        document.getElementById('eq').innerHTML = `${a}xx ${c}`;
      }
    } else if (b == -1) {
      if (c > 0) {
        document.getElementById('eq').innerHTML = `${a}xx - x + ${c}`;
      } else if (c == 0) {
        document.getElementById('eq').innerHTML = `${a}xx - x`;
      } else {
        document.getElementById('eq').innerHTML = `${a}xx - x ${c}`;
      }
    } else {
      if (c > 0) {
        document.getElementById('eq').innerHTML = `${a}xx ${b}x + ${c}`;
      } else if (c == 0) {
        document.getElementById('eq').innerHTML = `${a}xx ${b}x`;
      } else {
        document.getElementById('eq').innerHTML = `${a}xx ${b}x ${c}`;
      }
    }
  }
}
