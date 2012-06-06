// Curve di Hermite Cubiche....p[0] e p[1] sono i punti di partenza e arrivo, mentre
// i restanti 2 i manici. I punti di partenza ed arrivo sono legati ai manici nel senso che all'arrivo
// devono essere tangenti con i rispettivi manici

var domain = INTERVALS(1)(20);
var controlpoints = [[1,0],[1,1],[0,1],[1,0]];
var curveMapping = CUBIC_HERMITE(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
var drawPoints = SIMPLICIAL_COMPLEX(controlpoints)([[0],[1],[2],[3],[4]]);
var tot = STRUCT([curve,COLOR([0,0,1])(drawPoints)])
DRAW(tot);

//Curve doppie di Hermite con superficie...esempio più avanti
var domain = PROD1x1([INTERVALS(1)(14),INTERVALS(1)(14)]);
var c1 = CUBIC_HERMITE(S0)([[1,0,0],[0,1,0],[0,3,0],[-3,0,0]]);
var c2 = CUBIC_HERMITE(S0)([[0.5,0,0],[0,0.5,0],[0,1,0],[-1,0,0]]);
var sur3 = CUBIC_HERMITE(S1)([c1,c2,[1,1,1],[-1,-1,-1]]);
var out = MAP(sur3)(domain);
DRAW(out);

// Curve di Bezier...curve con quanti punti vogliamo, primo e ultimo punto sono quelli di partenza e arrivo.
// Gli altri sono punti di controllo che non vengono interpolati.

var domain = INTERVALS(1)(20);
var controlpoints = [[1,0],[1,1],[-1,1],[1,0]];
var curveMapping = BEZIER(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
	var spline = POLYLINE(controlpoints);
	var out = STRUCT([curve,spline])
DRAW(out);

//prova bezier curve
var domain = INTERVALS(1)(20);
var controlpoints = [[0,2,2],[4.5,2,4],[9,2,2]];
var curveMapping = BEZIER(S0)(controlpoints);
var curve = MAP(curveMapping)(domain);
	var spline = POLYLINE(controlpoints);
	var out = STRUCT([COLOR([0,1,0])(curve),spline])
DRAW(out);

	var domain = INTERVALS(1)(20);
	var controlpoints = [[1,0],[3,1],[4,3],[6,5],[9,2],[14,0]];
	var curveMapping = BEZIER(S0)(controlpoints);
	var curve = MAP(curveMapping)(domain);
	var spline = POLYLINE(controlpoints);
	var out = STRUCT([curve,spline])
DRAW(out);

//Curve Spline: primo e ultimo punto sono quelli di partenza e arrivo. Gli altri sono di controllo ma 
//vengono interpolati sempre secondo il concetto di tangente. Dopo (domain,h) se si modifica il valore di h
// che di default è 1, si può allungare o accorciare il valore della tangente, quindi rendere la curva
// diversa a seconda dei valori

var domain = INTERVALS(1)(20);
var controlpoints = [[1,0],[1,0],[1,1],[ -1, 1],[ 1,0],[1,0]];
var splineCardinal = SPLINE(CUBIC_CARDINAL(domain))(controlpoints);
var spline = POLYLINE(controlpoints);
var out = STRUCT([splineCardinal,spline])
DRAW(out);

//Curve UB-Spline. Simili alle spline come ragionamento, ma non interpolano i punti, gli approssimano.
// Tipo bezier, ma permettono di essere più "flessibili" rispetto a bezier

var domain = INTERVALS(1)(20);
var controlpoints = [[1,0],[1,0],[1,1],[ -1, 1],[ 1,0],[1,0]];
var splineCubic = SPLINE(CUBIC_UBSPLINE(domain))(controlpoints);
DRAW(splineCubic);

//Curve Nub spline
var controls = [[0,0],[-1,2],[1,4],[2,3],[1,1],[1,2],[2.5,1],[2.5,3],[4,4],[5,0]];
var knots = [0,0,0,0,1,2,3,4,5,6,7,7,7,7];
var nubspline = NUBSPLINE(3)(knots)(controls);
DRAW(nubspline);

//Nubs...sembrano più segmentate delle Nub.
var domain = INTERVALS(1)(40);
var controls = [[0,0],[-1,2],[1,4],[2,3],[1,1],[1,2],[2.5,1],[2.5,3],[4,4],[5,0]];
var nubs = NUBS(S0)(3)([0,0,0,0,1,2,3,4,5,6,7,7,7,7])(controls);
var model = MAP(nubs)(domain);
DRAW(model);

//Esempio di superficie con NUBS
var domain = DOMAIN([[0,1],[0,1]])([30,30]);
var b0 = BEZIER(S0)([[0,0,0],[5,-10,0],[10,0,0]]);
var b1 = BEZIER(S0)([[0,2,0],[8,3,0],[9,2,0]]);
var b2 = BEZIER(S0)([[0,4,1],[7,5,-1],[8,5,1],[12,4,0]]);
var b3 = BEZIER(S0)([[0,6,0],[9,6,3],[10,6,-1]]);
var controls = [b0,b1,b2,b3];
var nubs = NUBS(S1)(3)([0,0,0,0,7,7,7,7])(controls);
var model = MAP(nubs)(domain);
DRAW(model);

//NURBspline
var _p = Math.sqrt(2)/2.0;
var controls = [[-1,0,1], [-_p,_p,_p], [0,1,1], [_p,_p,_p],[1,0,1], [_p,-_p,_p], [0,-1,1], [-_p,-_p,_p], [-1,0,1]];
var knots = [0,0,0,1,1,2,2,3,3,4,4,4];
var nurbs = NURBSPLINE(2)(knots)(controls);
DRAW(nurbs);

//Curve con punti di controllo per Hermite, Bezier, Spline Cubiche e Spline Ubcubiche.
var domain = INTERVALS(1)(20);
var points = [[-3,6],[-4,2],[-3,-1],[-1,1],[1.5,1.5],[3,4],[5,5],[7,2],[6,-2],[2,-3]];
var curveMapping = CUBIC_HERMITE(S0)(points);
var curve = MAP(curveMapping)(domain);
var curveMapping2 = BEZIER(S0)(points);
var curve2 = MAP(curveMapping2)(domain);
var splineCardinal = COLOR([1,0,1])(SPLINE(CUBIC_CARDINAL(domain))(points));
var splineCubic = COLOR([0,1,0])(SPLINE(CUBIC_UBSPLINE(domain))(points));
var drawPoints = SIMPLICIAL_COMPLEX(points)([[0],[1],[2],[3],[4],[5],[6],[7],[8],[9]]);
var out = STRUCT([splineCardinal,splineCubic,drawPoints,curve,curve2]);
DRAW(out);


//Paragone fra Bezier e UB-Spline: disegnando una gaussiana, con bezier,
// è quasi impossibile riuscire ad approssimarne il disegno, con la ubspline
// si riesce.

var domain = INTERVALS(1)(20);
var controlpoints = [[0,0],[0,0],[5,1],[10,3],[15,1],[20,0],[20,0]];
var curveMapping = BEZIER(S0)(controlpoints);
var curve = MAP(curveMapping)(domain,2);
	var spline = POLYLINE(controlpoints);
	var out = STRUCT([curve,spline])
DRAW(out);

var domain = INTERVALS(1)(20);
var controlpoints = [[0,0],[0,0],[5,1],[10,3],[ 15, 1],[20,0],[20,0]];
var splineCubic = SPLINE(CUBIC_UBSPLINE(domain))(controlpoints);
DRAW(splineCubic);


//Prova superficie con HERMITE 
var domain = PROD1x1([INTERVALS(1)(30),INTERVALS(1)(30)]);
var controlpoints1 = [[0,0,1],[0,0,1],[-2,2,0],[-2,-2,0]];
var c1 = (CUBIC_HERMITE(S0)(controlpoints1));
var controlpoints2 = [[0,-0.2,0],[0,-0.2,0],[-4,4,0],[-4,-4,0]];
var c2 = CUBIC_HERMITE(S0)(controlpoints2);
var superficie = CUBIC_HERMITE(S1)([c1,c2,[1,0,1],[1,0,-2]])
var out = COLOR([1,0,0])(MAP(superficie)(domain));
DRAW(out);


// Cupola con bezier superficie
var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(20)]);
var c0 = BEZIER(S0)([[0,0,-2],[2.5,0,2],[7.5,0,2],[10,0,-2]]);
var c1 = BEZIER(S0)([[0,5,4],[2.5,5,8],[7.5,5,8],[10,5,4]]);
var c2 = BEZIER(S0)([[0,10,-2],[2.5,10,2],[7.5,10,2],[10,10,-2]]);
var out = MAP(BEZIER(S1)([c0,c1,c2]))(domain);
var out2 = COLOR([0,1,0,0.7])(out)
DRAW(out2);

//Cupola 2 con bezier

var domain = PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var c0 = BEZIER(S0)([[0,0,0],[2.5,-5,0],[7.5,-5,0],[10,0,0]]);
var c1 = BEZIER(S0)([[0,0,0],[2.5,0,10],[7.5,0,10],[10,0,0]]);
var c2 = BEZIER(S0)([[0,0,0],[2.5,5,0],[7.5,5,0],[10,0,0]]);
var out = MAP(BEZIER(S1)([c0,c1,c2]))(domain);
var out2 = COLOR([0,1,0,0.5])(out)
DRAW(out2);

//Prova allianz
//Cubic_Hermite

var domain1 = INTERVALS(1)(30);
//var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);
var domain2 =PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var c01 = CUBIC_HERMITE(S0)([[1,0,0],[0,2,0],[0,5,0],[-2,0,0]]);
var curve01 = MAP(c01)(domain1);
var c02 = CUBIC_HERMITE(S0)([[-1,0,0],[0,2,0],[0,5,0],[2,0,0]]);
var curve02 = MAP(c02)(domain1);
var c03 = CUBIC_HERMITE(S0)([[-1,0,0],[0,-2,0],[0,-5,0],[2,0,0]]);
var curve03 = MAP(c03)(domain1);
var c04 = CUBIC_HERMITE(S0)([[1,0,0],[0,-2,0],[0,-5,0],[-2,0,0]]);
var curve04 = MAP(c04)(domain1);
var baseint = STRUCT([curve01,curve02,curve03,curve04])
DRAW(baseint)

var domain1 = INTERVALS(1)(30);
//var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);
var domain2 =PROD1x1([INTERVALS(1)(16),INTERVALS(1)(16)]);
var c11 = CUBIC_HERMITE(S0)([[3,0,0],[0,4,0],[0,10,0],[-4,0,0]]);
var curve11 = MAP(c11)(domain1);
var c22 = CUBIC_HERMITE(S0)([[-3,0,0],[0,4,0],[0,10,0],[4,0,0]]);
var curve22 = MAP(c22)(domain1);
var c33 = CUBIC_HERMITE(S0)([[-3,0,0],[0,-4,0],[0,-10,0],[4,0,0]]);
var curve33 = MAP(c33)(domain1);
var c44 = CUBIC_HERMITE(S0)([[3,0,0],[0,-4,0],[0,-10,0],[-4,0,0]]);
var curve44 = MAP(c44)(domain1);
var baseext = STRUCT([curve11,curve22,curve33,curve44])
DRAW(baseext)


var c011 = CUBIC_HERMITE(S0)([[1,0,2],[0,2,2],[0,5,0],[-2,0,0]]);
var curve011 = MAP(c011)(domain1);
var c022 = CUBIC_HERMITE(S0)([[-1,0,2],[0,2,2],[0,5,0],[2,0,0]]);
var curve022 = MAP(c022)(domain1);
var c033 = CUBIC_HERMITE(S0)([[-1,0,2],[0,-2,2],[0,-5,0],[2,0,0]]);
var curve033 = MAP(c033)(domain1);
var c044 = CUBIC_HERMITE(S0)([[1,0,2],[0,-2,2],[0,-5,0],[-2,0,0]]);
var curve044 = MAP(c044)(domain1);
var basesupint = STRUCT([curve011,curve022,curve033,curve044])
DRAW(basesupint)

var c111 = CUBIC_HERMITE(S0)([[3,0,2],[0,4,2],[0,10,0],[-4,0,0]]);
var curve111 = MAP(c111)(domain1);
var c222 = CUBIC_HERMITE(S0)([[-3,0,2],[0,4,2],[0,10,0],[4,0,0]]);
var curve222 = MAP(c222)(domain1);
var c333 = CUBIC_HERMITE(S0)([[-3,0,2],[0,-4,2],[0,-10,0],[4,0,0]]);
var curve333 = MAP(c333)(domain1);
var c444 = CUBIC_HERMITE(S0)([[3,0,2],[0,-4,2],[0,-10,0],[-4,0,0]]);
var curve444 = MAP(c444)(domain1);
var baseextsup = STRUCT([curve111,curve222,curve333,curve444])
DRAW(baseextsup)

var s12 = BEZIER(S1)([c01,c11]);
var surface12 = MAP(s12)(domain2);
DRAW(surface12);

var s12 = CUBIC_HERMITE(S1)([c1,c2,[0,0,3],[0,0,-3]]);
var surface12 = MAP(s12)(domain2);
DRAW(surface12);

DRAW(SKELETON(1)(surface12));
 //OK


 //pROVA NUBS
 var domain1 = INTERVALS(1)(15);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30]);

var controls1 = [[0,2,0],[0.7,1.8,0],[1,0,0],[0.7,-1.8,0],[0,-2,0],[-0.7,-1.8,0],[-1,0,0],[-0.7,1.8,0],[0,2,0]];
var knots1 = [0,0,0,1,2,3,4,5,6,7,7,7];
var c1 = NUBS(S0)(2)(knots1)(controls1);
var curve1 = MAP(c1)(domain1);
var controls2 = [[0,4,0],[1.4,3.6,0],[2,0,0],[1.4,-3.6,0],[0,-4,0],[-1.4,-3.6,0],[-2,0,0],[-1.4,3.6,0],[0,4,0]];
var knots2 = [0,0,0,1,2,3,4,5,6,7,7,7];
var c2 = NUBS(S0)(2)(knots2)(controls2);
var curve2 = MAP(c2)(domain1);
var base = STRUCT([curve1,curve2]);

var s11 = BEZIER(S1)([c1,c2]);
var surf1 = MAP(s11)(domain2);
DRAW(surf1)


var controls1 = [[0,2,2],[0.7,1.8,2],[1,0,2],[0.7,-1.8,2],[0,-2,2],[-0.7,-1.8,2],[-1,0,2],[-0.7,1.8,2],[0,2,2]];
var knots1 = [0,0,0,1,2,3,4,5,6,7,7,7];
var c1 = NUBS(S0)(2)(knots1)(controls1);
var curve1 = MAP(c1)(domain1);
var controls2 = [[0,4,2],[1.4,3.6,2],[2,0,2],[1.4,-3.6,2],[0,-4,2],[-1.4,-3.6,2],[-2,0,2],[-1.4,3.6,2],[0,4,2]];
var knots2 = [0,0,0,1,2,3,4,5,6,7,7,7];
var c2 = NUBS(S0)(2)(knots2)(controls2);
var curve2 = MAP(c2)(domain1);
var base = STRUCT([curve1,curve2]);
var altezza = STRUCT([curve1,curve2]);

var s12 = BEZIER(S1)([c1,c2]);
var surf2 = MAP(s12)(domain2);
DRAW(surf2)

var controls11 = [[0,2,1],[0.7,1.8,1],[1,0,1],[0.7,-1.8,1],[0,-2,1],[-0.7,-1.8,1],[-1,0,1],[-0.7,1.8,1],[0,2,1]];
var controls22 = [[0,4,1],[1.6,3.8,1],[3,0,1],[1.6,-3.8,1],[0,-5,1],[-1.6,-3.8,1],[-3,0,1],[-1.6,3.8,1],[0,4,1]];
//var controls11 = controls1.map(function (p) {return [p[0], p[1], p[2]-1]});
//var controls22 = controls2.map(function (p) {return [p[0], p[1], p[2]-1]});
var c1 = NUBS(S0)(2)(knots1)(controls11);
var curve1 = MAP(c1)(domain1);
var c2 = NUBS(S0)(2)(knots2)(controls22);
var curve2 = MAP(c2)(domain1);
var s13 = BEZIER(S1)([c1,c2]);
var surf3 = MAP(s13)(domain2);


var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([20,20,20]);
var solido = BEZIER(S2)([s11,s13,s12]);
var solido1 = MAP(solido)(domain3);
DRAW(solido1)
DRAW(SKELETON(1)(solido1))

function timeMsg()
{
var t=setTimeout("alertMsg1()",1000);
var t1=setTimeout("alertMsg2()",2000);
var t2=setTimeout("alertMsg3()",3000);
var t3=setTimeout("alertMsg4()",4000);
var t4=setTimeout("alertMsg5()",5000);

}
function alertMsg1()
{DRAW(surf1);}
function alertMsg2(){
DRAW(surf2);}
function alertMsg3()
{DRAW(surf3);}
function alertMsg4()
{DRAW(solido1);}
function alertMsg5()
{HIDE(surf3);}

