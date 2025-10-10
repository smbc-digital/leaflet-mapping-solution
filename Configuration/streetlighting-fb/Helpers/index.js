let target_url

const getTargetUrl = () => {
    if(!target_url){
        target_url = generateTargetUrl()
    }

    return target_url
}

const generateTargetUrl = () => {
    if (window.location.hostname.includes('localhost')) {
        return  'http://localhost:57726'
    }
    else if (window.location.hostname.includes('int'))
    {
        return  'https://int-dts.smbcdigital.net'
    }
    else if (window.location.hostname.includes('qa'))
    {
        return  'https://qa-dts.smbcdigital.net'
    }
    else if (window.location.hostname.includes('stage'))
    {
        return  'https://stage-dts.smbcdigital.net'
    }
    else if (window.location.hostname.includes('myaccount') || window.location.hostname.includes('forms'))
    {
        return  'https://myaccount.stockport.gov.uk'
    }
}

export {
    getTargetUrl
}
