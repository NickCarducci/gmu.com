import React from "react";
//import Cable from "./Dropwire";
//import TwitterTweetEmbed from "./TwitterTweetEmbed";
import { UAParser } from "ua-parser-js";
//import Gist from "react-gist";
//import QuoraEmbed from "./QuoraEmbed";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
    this.gov = React.createRef();
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
  };
  componentWillUnmount = () => {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname === "/") {
        } else if (this.props.pathname === "/gov") {
          window.scroll(0, this.gov.current.offsetTop);
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  render() {
    /*const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    const scrollPath = (scrollPath) =>
      [this.state.hoverPath, this.state.scrollPath].includes(scrollPath)
        ? "2px solid"
        : "0px solid";
    const hoverpathe = (ev) =>
      ev.target &&
      ev.target.href &&
      this.setState({
        hoverPath: ev.target.href.split(`${window.location.origin}/`)[1]
      });*/
    const space = " ";
    return (
      <div
        style={{
          overflowX: "hidden",
          fontFamily: "arial, sans serif",
          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative"
        }}
      >
        <a
          style={{
            shapeOutside: "rect()",
            float: "right",
            maxWidth: "100%",
            padding: "0px 10px",
            //fontSize: "20px",
            fontFamily: "'Pacifico', sans-serif"
            //color: "rgb(230,230,255)"
            //backgroundColor: "rgb(32, 22, 11)"
          }}
          href="https://vaults.biz/gmu"
        >
          General Maintenance Unit
        </a>
        Derivative something, like it is increasing endogeniositously, profits
        cash flow bookkeeping, not accounting (we amortize balance sheet to
        zero)
        <br />
        Donee surrendered freedom bid insurance and landlord, outright lender;
        false bid pool loss or force majeure intent repo cycle kept down
        payments laundered and loitered, or leased
        <br />
        Commercial leases in gdp
        <br />
        Energy is important for national and economic security strong
        gubernatorial leadership to not have ideological agenda compromise in
        400/day Russian death to 4/day Ukrainian death
        <br />
        <br />8 years no matter until NOW
        <br />
        <br />
        <a href="https://www.quora.com/What-is-the-present-GDP/answer/Nick-Carducci">
          What is the present GDP
        </a>
        {/*<QuoraEmbed
          question="What-is-the-present-GDP"
          username="Nick-Carducci"
        />*/}
        <br />
        <br />
        need to drive the price of oil down, he laughs at us and asks, that is
        the best you can do? He welcomes this, this is part of his machismo and
        bravado.
        <br />
        <br />
        1775-1787 American Revolution, petty as all get out (tea sales tax,
        successful appeal, livelihood), 1814-1870 GDP/p imputed chores, still
        not productive enough to prove technological advancement (0y/1x
        efficiency), for not GDP/hour because that is expense/hour, but 1y/0x
        elasticity is GDP/p, and so efficiency 0y/1x for economic welfare on a
        rice-plane y, is GDP/hour-GDP/p
        <br />
        <br />
        Go White, investment bank out of welfare and {">"}1/12 hospital fund
        vertical “general revenue “ They are going to press our commitments to
        44 years payday current income impossibly down debt.
        <br />
        <br />
        Fix ‘excess’ deaths for population growth, specific age, meaningless
        significance p{"<"}.05 n=2019-20 humanharvest.info/polio check the
        parcels! vaults.biz/immi teapharmacy.party/drugs
        <br />
        <br />
        Joan Virden the government{space}
        <a href="https://gmunit.us">leases back the land to you</a>. Let them
        take our oil (for dollar royalty), don’t let them rent seek nor take the
        land. DOUCHE LADY
        <h4>
          Warn tort jail no state vig! Known hazard open ingredient list no
          prescription required for transaction-fee-based security depositary
          receipt
        </h4>
        Use industry-vertical-type as “collateral” for max-royalty future
        investments
        <br />
        <br />
        Counterfeit in contract and loitering borrowers is not conservative!
        Surrendered freedom donee beneficiary and force majeure intent, 1y/0x
        useless elasticity too
        <br />
        <br />
        Don’t scapegoat homelessness by landlords, lenders and insurers over CT
        scans/age, 19%/pop disabled - hypocrisy “trust breakers
        <br />
        <br />
        Samples vary greatly - especially when order doesn’t matter
        <br />
        <br />
        Per diem incarceration bond conflict of interest, ween cops off bonds
        with{space}
        <a href="https://carducci.us/primary">
          truncated production tax 2025 (nj)
        </a>
        <br />
        <br />I yield back until this gets unreasonable, preventing commerce, is
        gmunit.us’ honor
        <h1>
          donee-beneficiary-surrendered-freedom bid by landlord and insurer but
          outright loitering with lender of force-majeure intent conspiracy
        </h1>
      </div>
    );
  }
}
