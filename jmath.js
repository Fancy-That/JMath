const pi=3.14159268;let clamp=(_,l,u)=>_<l?l:_>u?u:_,abs=_=>_<0?-_:_,factorial=(_,$=1)=>{for(;_;)$*=_--;return $},square=_=>_*_,floor=_=>_|0,sqrt=(_,$=h=_/2,l=0)=>{while(abs(_-$*$)>1e-15){$=(h+l)/2;$*$>_?h=$:l=$}return $},pow=(_,$,o=_)=>{for(;--$;)_*=o;return _},sin=(_,$=_,i=9)=>{for(;i--;)$+=(i%2?1:-1)*pow(_,19-i*2)/factorial(19-i*2);return $},cos=(_,f=sin(_+1))=>f,tan=_=>sin(_)/cos(_),fib=(_,i=_,s=t=n=1,o=[1])=>{for(;--i;)o.push(n),t+=s,s=n,n=t;return o},map=(x,a,b,c,d)=>(x-a)/(b-a)*(d-c)+c;
9600 0 1280
(9600/1280) = 7
9600-1280*7
