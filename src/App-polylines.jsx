import {APIProvider} from '@vis.gl/react-google-maps';
import {Map} from '@vis.gl/react-google-maps';
import {Marker} from '@vis.gl/react-google-maps';
import {InfoWindow} from '@vis.gl/react-google-maps';
import {AdvancedMarker, Pin} from '@vis.gl/react-google-maps';
import {Polyline} from '@vis.gl/react-google-maps';

import { useMapsLibrary } from '@vis.gl/react-google-maps';
import TrafficPolyline from './external/TrafficPolyline';
import routeData from './data/routeData.json';

import './App.css';

const routePolylineA = 'ozukHjm_oV@uA?iA@w@@qB?g@@W?_A@q@D_C?[?cA?Q@M?OBMB[XoBTuANeARuAZqB?ADYDW@S@CB_@@a@?C@I@gA?e@?ADY@OAo@Cc@Ea@COCKCOEUUmAOw@?A[eBESCUCUAYASAU?Q?e@@Q?u@?w@@k@@eD?M@kA@_@@aABaG@[@iCDyBCUDiE@oA@o@?i@?S@}B?o@?a@?o@?UA}@C}@AgA?m@Ee@?sE?[@m@?Y@gC?q@?aBBaCB{G@wA@oA@aE?]BgE@yB@mADmK?WBmI@[?U@eD@gD@_@@{I@M@{DBeI@_A@_D@qB?}A@{DDkJ?Q?u@BiI@w@?W@qB@gC@kC?A@u@@{B?sABuE@y@FsM@kDBkHDaK?aB@w@BiI@_B@_A?{@B{DBgC?e@@qABuI?a@?k@D_@@M@O@K@wD@mC?[@m@?m@?o@?]@c@?c@?CBkA@yA@w@?O?_@@W?W?_@?U@Y@Q?K@I@E?C@IBOBI@IBIDOFOZm@n@oAd@}@JY?ABERc@P_@\\m@\\o@LWLYVi@Ni@?CF[DU?yA@cA@mB?w@@gA@iDCUFgMDsG?u@BuCDqL?w@@{E?e@D]@E?G?m@@iB?e@BgE@}A@aA?uG?E?EAG?Q@yC@q@Co@?UC_@C_@CQEW?ASiAIWUk@i@wAEIQe@M]KUW@_A@m@@q@@[@G?Q?a@FU@G?G?w@BwABE@wADU@G@QDsDGeAE_@?q@?E?w@AsBCYAW?i@Ag@E]?]AWMMEMAIAMAA?OACAKAIAEAEAKESKMGKKKKEEACACIKMWGMEKEOGQCGW_AY_AKWEOEMCICKGMGMGEMKq@mBIUIUACGQGM?AIQi@wAEIKU_@aAEMGOUi@O_@k@wAMa@Si@QEGAG?A?E@G@G@?@';
const routePolylineB = '_zdlHjxgoVCQAGGu@Gu@Em@OcBA_@KgAEc@Ec@MeAOiBGm@Qm@Oi@[cAM]M[IMUc@AEWg@MUg@aAm@eA?AMWESCQy@OeAU_@MWOSOUUIQGWMi@Ks@QeBE[GUe@LOLINCDS`@[v@Q\\S`@a@n@cAl@[PABMPAHEPIn@It@MjAGr@Ch@Ct@?LC|@@h@FtA@NFt@JlAF^Hl@@DNp@Np@DR@DBVFh@?J@V?@ATADIZK\\UXSXi@i@?KC]ASCa@@a@Ak@?_@?a@AW?oAAiAAy@AkAAgA?E@kC?S?AG[@_@@c@Bc@B_@Dc@D_@Da@D_@@CF_@F]F_@HY?CH]J]BKFUVy@L]J]J[L]Vy@L]FSBIJ[JYJ[@CJ]DKDOL_@J[J[H]J]Jc@H_@Hc@Hg@BW@IDUB_@@CB[Ba@FiA@c@@aA?iA?cA?u@AO?g@AgA?eAAc@?e@?a@?]AqA?YAgAAmA?]?[Ag@?c@?c@?q@?S@a@?C?]@e@@e@?G?Y@g@BaA@c@Be@?G?WB]?C@c@@U?MB]@c@@U@IBe@?G@YB_@?ABa@Dc@B_@?AB_@@SFo@FaADc@Fg@Fy@LgADc@BS?EFa@@KHq@Fc@NeA?A?EDYF_@F_@F_@Fa@Hc@@GBUF_@F_@Fa@F]Ha@NaAFa@F]Fc@BK@E@MF[?CF_@F]PcANcAF[D]Ha@Fa@Fc@F_@F_@Fk@PuAF_@Da@H{@?GDa@@EB_@B]B_@De@FaABa@@c@Bc@Ba@@]@c@BeA@a@@e@@_@@c@@c@@c@?WBiA@e@@u@@m@@G?G@s@@g@DyBFaE@Y?E@u@@M@g@@u@?M@g@?ABy@BmB@c@@aA?]?c@AgA?E?M?I?g@Ac@A_@Ac@A_@Ac@Ac@Ca@A_@ASCc@C{@Eq@I{BCi@Es@GoACo@?GCm@E{@AIG}A?CEy@Cq@GsAGmAImBSyEAWIiBAKGqAGsAEaAKmCI}AOyDE}@Ac@E_ACu@Ay@GaC?e@CcAAcAAiAAiA?EAaB@_A?m@?W@eA?gA@aA@e@@e@?A?]@e@@_@@U?IDeABe@Bc@B_@De@Fa@Da@F[F_@F[H[T}@L_@?AL]J[@A@EHSL[JUNYLUN[P]^w@JSP[BEHQN[LWLYJUBEL[L[@EJWJ[J]HYJc@@I@GBKH]DS@MBMBQBUBM@QBO@M@I@SB[@[B[@Q@O?I@I@[@a@@a@@a@@_ADkA@m@?O@e@BcAB}@?K@c@@a@DkB@y@@c@@i@@e@@_@@W?UBm@BgABg@@[Bc@B[?IBc@H}@?AHeADg@H}@Da@Be@D_@Bg@@S@MB_@B]@_@B]Bc@@e@Bi@@]Be@BaA?K@W@W?G?e@@aA@i@?]?e@?E@o@?w@A[?]?e@?GAq@Aq@AcA?AEcAA[A]EiAA_@Ci@EcAEeACe@Ac@Ae@?CC}@Ae@?c@A]?m@?g@?_@?g@@_@?C@e@?]@S?Q@c@@a@Bc@@e@Be@@_@Bg@Bc@@a@Ba@@a@@YD{@@Y@U?K@S@O@a@DeADeA@WBk@Ba@@e@B_@@i@?AB_@@c@B_@JkC@i@@I?MBk@@Y@Q@O@c@Bc@Bc@?I?E@U@[Bc@?G@A@]Bc@?EB[@K@SBc@De@BYFo@Dc@D]Fe@Fg@D[Fc@F_@DY@G@EFYF]BO@E@EBKF[FYH_@Ha@Ja@J]H]DKFUH[L_@L_@J[Na@?AJWNc@HSTg@HQLYLYBEJWNWFMTc@@Al@eABEFIFMHMDINW@CLS@AHOFKNUNYHMHMLUNWHMDGPYNYNWR]JSBEJUR_@BGDIN[JW@CL]J]L_@FSBKJ_@@EDWHc@@CF_@D]Fa@Da@BS?E@KB]Dg@Bc@Ba@Bg@@W?EDaA?AFgBBe@HaC@UDaA@g@Bc@?G@U@c@@G@_@@[Be@?A@g@@O@KDkAJQ?ABi@@W@O?CFu@Du@Dw@Dw@B_@@IBe@BYDk@B]H{@ZwDH_AFo@Dm@Ba@@W@MBi@H_@@K@EBEBEBEDEHGDCd@QfAEP?PAh@?LA@?XIvB@H?|@@l@@z@@pA@fB?rA?b@@b@?T?T?b@@H?R?D?H?`@?N?v@?N?R?f@?R?\\@F?LBJ@J@`AA`@?^?`@?ZAJA\\?b@AL?ZAT?fA@lA?h@ALPBB@@L?V?R?d@Az@AXA?[AcCAaA?g@?]@K?K@O@QDe@Hm@Hi@RyA|@cGFc@TuAHGHSR[FIHIFGLIJEJCHANAF?B?J@JBHB^P`@Kv@j@JJ@?@@B?@@N@TPb@ZPJ@@DBFFFDDDVTLJ\\Z@@BBDBBDBBLJBDBBBBFDBDHFFDDDdA`Ax@t@\\ZfAbAj@f@d@b@\\ZDBBBTTHHFDDDzBrB|BrBb@b@FDVTHHHH^Zh@f@nAhAf@b@TT^Z\\Z\\Z^\\ZXNLLLLJfA~@\\\\HHRP|@v@BBZV\\Z^\\PNJJ^Z\\ZHHRPJHRPLJNNJHRP\\Z^ZHH@@PN^ZHHRP|@v@^ZHHRP^Z^Z\\ZNLFDHHHFb@`@b@^HFFFb@^b@^NL@@LJJJ^\\VVDBx@p@|@x@HFBBPPPNn@l@@@TTd@`@nAbAf@XHFNH\\PZRb@RXPPHHDVL@@ZL\\LZLLDLD@?RFHD@?ZH\\J\\HB@\\JzAZJ@`@F`@Fd@F\\D\\BB@\\BV@h@BzADx@?p@An@Cn@GRA^GFCNC\\GXIZI`@MVIx@]XMl@[FEr@e@fA{@h@e@r@q@X[h@m@b@i@`@i@x@kA~@}AXe@P]\\q@HQJWHOHSLYBGDM@ADKPc@DMHUFQL]Ne@FQJ[Lg@J[Lg@Lg@DMJc@\\wAFYFSFQBGBIFMHUJQFMFKDKFIBGBERKBABCDC@A\\c@PQDEHGDCHINI@?PIJGJGPENELCJEHAHAHA@?B?@?DAD?FAD@D?H?\\JPFPHLF^RTJHDFDFBB@FBHBFBF@L@N@H?F?JCHAFADAHEFCFEJIHIJMJOFKFKHOJQ^q@Ta@FUb@y@JQR]DIVg@Xe@@ETa@f@}@\\k@JSPYf@aATa@`CgEHMp@mAd@y@d@y@lA{BHQXg@DKNWRWJSP[R[LUJUXg@FKPYf@}@`@u@Xg@JOz@}ApA}BXg@`DyFh@aAjAuBXe@nDmG`GqKdAmBz@_BR[d@{@FIh@_ARa@bAbBNVDHHLDHLTHLZh@j@~@NXHJt@tAPXLRDJPZZh@Xf@p@fAVd@FJDHR\\dBxCl@fAJWj@aADKDG`@u@Xe@`AgBLSTc@Xg@x@wAFGBKp@kALUBGVe@Zg@z@{ATa@h@_ALWFKDIb@w@P]x@yAHOb@o@JSt@sA`AaBMU@CPYLWHOp@oALYVi@LWVa@`@s@p@{@ZWESAEEWEOESAC?CK_@GS_@iAK_@Sq@M_@Og@GSGQAGSo@Ok@q@mBIUIUACGQGM?AIQi@wAEIKU_@aAEMGOUi@O_@k@wAMa@Si@QEGAG?A?E@G@G@?@'
const routePolylineC = 'wswkH`ofmVEr@?@@Df@Pd@LB@RRNFPDb@L\\JMd@_ArDGTI\\MXa@|@JLHPPf@R|@DZ?BD`@Jx@NvABP@LF`@B\\NjAHr@?DF`@@L?BBLD`@V|BB`@BV@\\?R?T?@AJ?B?H?DAn@Cn@Eh@Cz@WpGCz@ALCz@A\\A\\A`@@l@@?@TBRDRDPFN@@FLPVBBFJHFFF@?b@ZNXPZ?@?@?@?@@@?@?@?@@B?B@@@B?@@@@B@@@@@?@@@@B@B?@?@?B?@?@A@?@A@A@A@A@A@A@C?A@A@C?C@A?C?C?A?C?C?C?C?A?CViAVo@\\y@Tg@l@wAh@uATk@j@wAj@wAR[RARCJCP@H@FDLHHHDLFJDLBT@DBb@BhA?f@B|@Ar@?^?L@\\AV?D?JAh@?\\?v@?RAh@?LAvA?R?l@Aj@?`AAb@?xAArA?LA^CrAEnAEv@Cf@Cf@AHEj@Gd@ALWhBKr@G\\CRIl@Qd@Kp@AFUfBKr@Ir@Gf@CJGf@ALKr@Gf@AJSzAk@pEKt@AHGh@CLIr@Id@ALMx@I\\EVIXAFABKXM`@IRWv@GJ}CdGEHyBhEQ^i@bAS^U`@A@[p@IPEFQ^o@pAEHgAxBiD|GWh@Q\\M\\ABM^M`@Ib@Mv@G`@?@AXAl@Cd@?tC?J?B?t@?B@nAA`@?jB?jD?DAxE?`B@n@?p@@t@?j@?dB@PAd@?L?B?H?DAB?DAB?BABABORSVJPLn@FTBJBJDTFb@Dl@BTBTBXBZ@R?@B`A?F?XAh@?VATFf@AZ?HCl@?HChAC`@Al@Ab@Ep@Cv@Ad@?R?\\?^?X?f@?n@?Z?~DEFEJ?Z?R?j@AbB@tA?zA?H?\\?P?j@@vC?f@?F?|@?\\?X?f@@t@?z@?h@An@?nA@^?L?tC@J@FDZ?v@@v@?t@?R?nB?n@?V?|@?xB?R@rD?j@Ad@@x@?hB?n@Ax@?b@?t@?|A?t@?Z?Z?r@A~A@t@Ar@?v@?\\?l@?v@AtA?z@?n@?B?p@?BApB?h@?\\?j@?l@?R?v@?dD?t@Ab@?lA?tA?V?lC?Z?X@j@?D?Z?^?L@b@?PBjAGl@?D@VBd@Bb@Bb@Ft@Hx@Dd@B^@^AP?L?X?@CXCVCT?BEVAJI\\ADGr@CHQVGHIPINCHEJIRKVGR?BGVCJCL?BETCXC\\ATAVA`A?~@?V?`@?l@?x@?`@@n@?X?bA?f@?fBAj@?v@?~D?~@?r@AjA?bA?t@?pA?jC?R?bA?|@A`@?h@?hA?pA?|@?`AAfA?j@?^?nA?nA?b@?pBA|C?xA?bE?tA?nMAbA?fA?X?\\?t@Ar@?lB?bBAl@?fAAtF?f@Av@?t@?rA?j@?v@?hA?p@@j@AdA?t@?dB?z@?p@A|@?r@A|A?t@A`A@r@?P?r@?Z?H?fA?p@?`AAbA?b@?l@Az@?t@?d@@lA?^Ex@AZ?\\?z@?z@?f@?d@@R@j@B|@?pA?z@Al@?pBIl@?x@Av@?f@?`BAp@?fB?ZAX@pA?`AA|@?nA@zA?j@@P?LH\\?lB?J?p@?tE?\\?v@?lB?v@?dE?jB?~@?nA?^?V?\\?V?^?J?h@?X?h@?X?|A@bBKl@?@B~DAxDApB?v@?Z?h@?v@?lB?tB@ZDJ@l@?tA?dC?v@?@?F?nA?bA?rA?^?lH?B?t@?v@?`E?jA?hFAJAF?p@?v@A|@?tE?^?r@AxDA~J?v@ArG?t@AzE?v@?N?VEf@C^BjEAvD?Z?VAlA?B?`@?P?P?^?X@pA?V?P?p@?n@Av@AjAAdB?bBA`C?\\ArD?|FErE?l@?`@EdF?p@At@AxC?fAA\\?^@f@?JAhA@l@@f@@TB`@BT@H@H@HNn@DPP^Fb@B`@BV@H?R@Z?@?L?LAN?l@?R?XA|@?j@?N?f@?tAAh@?B?RAx@A|ACdBArFGvMGxMAHEpGAjBEfKA|B?d@?BAt@A`DEvHAnBA`B?LCjDAtC?p@A`BA^AzDAR?LArB?xD?bAAV?RARAZIjA^CB?fAB`A@R?r@@dDFJ?H@JBVLLDHFFDFDFFHHLPLTLVJZ@@?@X`AJ\\DLFNHLJPJNNJALAD?DEVGVIZGNcAfCCHCJCNEREPARCRAP?N?P?N@P@NBNBT@DBNDR@@DPbB`EPb@BHBH@PFTBH?@BL@J?H@B?H@F?P@R?JAJAVCZCZAV?X?VBXBVFXNp@HTJTL\\JXN\\HRHRNVBFBDHJHF@BNJBBHDPDPDr@PHBFFHHb@l@PVRXFJJPNTlA`Bn@~@l@|@@@DFLWVa@`@s@p@{@ZWESAEEWEOESAC?CK_@GS_@iAK_@Sq@M_@Og@GSGQAGSo@Ok@q@mBIUIUACGQGM?AIQi@wAEIKU_@aAEMGOUi@O_@k@wAMa@Si@QEGAG?A?E@G@G@?@'
const routePolylineD = 'ozxkHlannVar@zmAd`@tq@'
const routePolylineE = 'akfkHjxxlVeAAAeBoEEuAJ@eNFsCFs]DiI?iGEY@kDFi@DiGe]EcO@?{PDuH?aJDuS?kTB_JBeZD_@FeGAyMCyDE]CaX?eEBu@FYJuAF]|@sCJe@tAsCbAgCNi@`@cADQb@iANy@wBsA}AkA{DcCaCgAqDeA_@EcGkBw@Io@DcA\\c@d@{@xAaAjC}@pBYh@aBxBsB`CCTsFvFsGfHuF~GiFfHeH~Jg@l@_B~AkA|@oBbAeCv@{DbAuJrC{HdCuOzEeJbD{BhA{BzAsClCiBxBwA~B{A~CwAvDaAbDSz@q@rCm@jDcBbLCRg@~EoB|YcAzMgB~ZaBzYkBzVOhCc@nHIbC[lH[jKQrGe@dKy@zM]|EiKjkBo@pHu@bHw@pFw@zDmAnEqApDeBvDc[xl@oFvKkHhNmBpE{AnE}AtFoAzF{@jF{@tG[lDSjEIlD?hCHhEXxE\\fDn@fElAjFv@fCfApCrDzHl@pAb@t@h[zo@lAxCfBlFnAxE~@zEx@nFf@bF^vFP`FD~EEvFwAth@{@dY[tFi@xFy@rGcA~FyMlp@{AfJgAtIkBtPq@bE{@rDgAnDwAhDw@xAYf@eBfCmBvB}KpJ_BtAsn@fi@_BbByAnBaBvCwAfDo@nB_@xAa@bBk@bDQxASbBWzDKzDAxE?j@Cp]DrSLbM?HVlR@nHMli@[hM?tIF|D^rJDdCEjCShCWbBi@`CkAjDaAvB{AnCuLzRq@z@Y\\kAfAcBhAyAj@eB`@qBPeId@gC^}Ab@ECKEoFhAaFnACpYAj_@Abl@?~ACjdAH|ODf@Onx@En@GxQ?tDDl@ClD@|EMpo@IfBEf@Od@yAlNy@dIAL}@~I@He@|E[bDkDr^mBdSo@~G_@nHiDEiBRyIrAa@Ds@Tu@f@{@`Ai@`Ag@vAWrAgAfMWpAoA`DUtAEfAF`AP`A~B`GVvADpAMrBBjAJp@XfAhArC`@p@h@`@`B`@PPlBrC|B`Dt@fAfAmBp@{@ZWg@}B{CaKaBqEiE{KSi@c@GUF';


function App() {

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <Map
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: 49.2827, lng: -123.1207 }}
        defaultZoom={13}
        mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_ID}
      >

        <TrafficPolyline 
          encodedPolylineStr={routePolylineE}
          route={routeData.routes[0]}
        />

         <Polyline
          encodedPath={routePolylineA}
          strokeOpacity={0}
            icons={[{
              icon: {
                path: 'M 0,-1 0,1',
                strokeOpacity: 1,
                strokeColor: '#7B3FC4',
                strokeWeight: 5,
                scale: 4
              },
              offset: '0',
              repeat: '20px'
            }]}
        />

         <AdvancedMarker
          position={{lat: 49.2770045, lng: -123.1091168}}
          title={'purple'}>
          <Pin
            background={'#7B3FC4'}
            glyphColor={'#C4A0E8'}
            borderColor={'#5A2A94'}
            scale={1.5}>
            </Pin>
        </AdvancedMarker> 

        <AdvancedMarker
          position={{lat: 49.1896508, lng: -122.8483087}}
          title={'purple'}>
          <Pin
            background={'#C4A0E8'}
            glyphColor={'#7B3FC4'}
            borderColor={'#5A2A94'}
            scale={1.5}>
            </Pin>
        </AdvancedMarker> 

        
        <Polyline
          encodedPath={routePolylineB}
          strokeColor={'#E8A020'}
          strokeWeight={5}
          strokeOpacity={0.8}
        />
        <Polyline
          encodedPath={routePolylineC}
          strokeColor={'#E85454'}
          strokeWeight={5}
          strokeOpacity={0.8}
        />
       
        
         <Polyline
          encodedPath={routePolylineD}
          strokeColor={'#7B3FC4'}
          strokeWeight={8}
          strokeOpacity={0.8}
        />
        
        
       


      </Map>
    </APIProvider>
  )
}

export default App
