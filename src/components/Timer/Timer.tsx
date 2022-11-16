import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { interval, of } from "rxjs";
import { startWith, scan, takeWhile, concatWith } from "rxjs/operators";
import { Parser } from "../../utils/parser";

const tick$ = interval(1000);

export const Timer = () => {
  let location = useLocation();
  const [value, setValue] = useState<any>(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const command = decodeURI(location.pathname.substring(1));
    const tokens = Parser.tokenize(command);
    const seconds = Parser.tokensToSeconds(tokens)!;
    const tickerSub = tick$
      .pipe(
        startWith(seconds),
        scan((acc) => acc - 1),
        takeWhile((v) => v > 0),
        concatWith(of("Time is up!"))
      )
      .subscribe({
        next: setValue,
        complete: () => setDone(true),
      });

    return () => tickerSub.unsubscribe();
  }, [location.pathname]);

  return (
    <div>
      <h1> {value}</h1>
      {done && <span>reset</span>}
    </div>
  );
};
