import styled from 'styled-components'

const ModalDialog = ({ children, ...props }) => {

    const Container = styled.div`
    display: ${props.action ? "block" : "none"};
    position: fixed;
    left: 0px;
    top: 0px;
    background-color: transparent;
    width: 100%;
    height: 100vh;
    `

    const ContainerCenter = styled.div`
    background-color: #0f141ad6;
    padding: 35px;
    width: 80%;
    margin: 39px auto;
    box-shadow: 0px 0px 80px -9px darkcyan;
    `

    return(
        <Container>
            <ContainerCenter>
                <button 
                style={{
                    cursor: "pointer",
                    marginBottom: "15px",
                    backgroundColor: "black",
                    color: "white",
                    padding: "10px 20px 10px 20px"
                    
                }}
                onClick={() => props.getStateOpenModalDialog(false)}
                >
                    Закрыть
                </button>
                <div>{children}</div>
            </ContainerCenter>
        </Container>
    )
}

  export default ModalDialog