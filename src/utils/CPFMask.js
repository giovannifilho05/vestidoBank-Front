export default function CPFMask(CPF) {
    const currentCPF = ''+ CPF.slice(0, 11)
    
    const updatedCPF = currentCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
     ( regex, arg1, arg2, arg3, arg4 ) => {
            return arg1 + '.' + arg2 + '.' + arg3 + '-' + arg4
    })

    return updatedCPF
}    