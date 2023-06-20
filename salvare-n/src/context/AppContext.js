import { useState, useEffect, createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [cont, setCont] = useState(null);
    const [is_connect, setIs_connect] = useState(true);
  const [chain_id, setChain_id] = useState(null);
  const [trashcans, setTrashcans] = useState(null);

    const initialContracts = () => {
        var { Contracts_MetaMask } = require('../contract/contracts')
        return new Contracts_MetaMask(window);
    };

    useEffect(() => {
        setCont(initialContracts());
    }, []);

    useEffect(() => {
    //非同期処理をUseEffect内で行う場合は、async/awaitを使用する
    const get_variable = async () => {
     if (cont) {
       setChain_id(await cont.get_chain_id());
       setIs_connect(await cont.isMetaMaskConnected());
       setTrashcans(await cont.getTrashCans())
      //  console.log(await cont.getTrashCans())
    }
    }

    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
    get_variable();
  }, [cont])

    return (
        <AppContext.Provider value={[cont, setCont]}>
            { children }
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext }
