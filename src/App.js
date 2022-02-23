import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import Leaflet from 'leaflet'
import { os_open } from './Tiles'
import Config from './Configuration.ts'
import { MAX_WIDTH_MOBILE } from './Constants'
import {
  SearchControlOverlay,
  setFullscreenControl,
  setLocateControl,
  setLayerControls,
  setStaticLayers,
  setZoomControls
} from './Controls'
import { getQueryStringParams } from './Helpers'
import { setDynamicLayers } from './Layers'
import leafletPip from '@mapbox/leaflet-pip'
import { GestureHandling } from 'leaflet-gesture-handling' // eslint-disable-line no-unused-vars
import locate from 'leaflet.locatecontrol' // eslint-disable-line no-unused-vars
import './styles.css'
import 'font-awesome/css/font-awesome.min.css'
import 'leaflet/dist/leaflet.css'
import 'leaflet-gesture-handling/dist/leaflet-gesture-handling.css'

function App() {
  const { Map, Stages, DynamicData, StaticData } = Config
  const mapRef = useRef()
  let UserJourneyStage = 1
  const WMSLayerGroup = {}
  const reducer = (accumulator, currentValue) => {
          accumulator[currentValue.key] = new Leaflet.FeatureGroup()
          return accumulator
        }

  const DynamicLayerGroup = DynamicData == undefined ? [] : DynamicData.reduce(reducer, {})

  useEffect(() => {
    const clientWidth = document.documentElement.clientWidth
    mapRef.current = Leaflet.map('map', {
      center: Map.StartingLatLng,
      zoom: Map.Zoom,
      zoomControl: false,
      preferCanvas: true,
      minZoom: Map.MinZoom,
      layers: [
        os_open
      ],
      gestureHandling: Map.EnableGestureControl && clientWidth < MAX_WIDTH_MOBILE
    })

    mapRef.current.attributionControl.addAttribution('© Crown copyright and database rights 2021 Ordnance Survey 100019571. © OpenStreetMap contributors')

    SetupControls(clientWidth)
  }, [])

  const SetupControls = (clientWidth) => {
    setStaticLayers(StaticData, mapRef.current)
    setDynamicLayers(DynamicData, DynamicLayerGroup, WMSLayerGroup, mapRef.current)
    setLayerControls(DynamicData, DynamicLayerGroup, WMSLayerGroup, mapRef.current)
    setFullscreenControl(mapRef.current)
    setZoomControls(mapRef.current, clientWidth)
    setLocateControl(Map, mapRef.current, clientWidth)
    SearchControlOverlay(Map, mapRef.current)
  }

  if (DynamicData !== undefined) {
    useEffect(() => {
      mapRef.current.addEventListener('moveend', () => { setDynamicLayers(DynamicData, DynamicLayerGroup, WMSLayerGroup, mapRef.current) })

      return () => mapRef.current.removeEventListener('moveend', () => { setDynamicLayers(DynamicData, DynamicLayerGroup, WMSLayerGroup, mapRef.current) })
    }, [])
  }

  if (Map.HasMapClickFunction) {
    useEffect(() => {
      mapRef.current.on('click', (e) => onMapClick(e))
    }, [mapRef])

    const onMapClick = async (event) => {
      if (mapRef.current.getZoom() >= Map.MapClickMinZoom) {
        var polygonsFoundInMap = leafletPip.pointInLayer(event.latlng, mapRef.current)

        if (!Map.DisplayBoundary || polygonsFoundInMap.length > 0)
          await Map.OnMapClick(mapRef, event)
      }
    }
  }

  const onMapLoad = async () => {
    await Map.OnMapLoad(mapRef)
  }

  const onMapLoadZoomToLocation = async () => {
    const qs = getQueryStringParams(window.location.search)
    if (qs['lat'] && qs['lng']) {
      const { lat, lng, zoom } = qs
      mapRef.current.setView([lat, lng], !zoom ? 18 : zoom)
    }
  }

  useEffect(() => {
    if (Map.HasMapLoadFunction) {
      onMapLoad()
    }

    if (Map.HasAllowZoomToLocation) {
      onMapLoadZoomToLocation()
    }
  }, [mapRef])


  useEffect(() => {
    if(Config.Map.EnableStageBehaviour){
      
      const qs = getQueryStringParams(window.location.search)
      
      //Checks for QS='stage' if defined, sets the stage
      //and sets up layers for that stage
      //NOTE: Does not setup button events
      if (qs['stage'] !== undefined) {
        UserJourneyStage = parseInt(qs['stage'])
        displayLayersForStage(UserJourneyStage)
      }
      else {
        UserJourneyStage = 0
        displayLayersForStage(UserJourneyStage)
      }
      
      //Checks for two buttons and adds event listners 
      //If its in the DOM.
      const previousButton = document.querySelectorAll('.previous-button')
      const nextButton = document.querySelectorAll('.next-button')
      const hideMenuButton = document.querySelectorAll('.hide-menu') 
    
      if (nextButton[0] !== undefined) {
        displayLayersForStage(UserJourneyStage)
        nextButton[0].addEventListener('click', () => handleNextClick(direction.FORWARD))
      }

      if (previousButton[0] !== undefined) {
        displayLayersForStage(UserJourneyStage)
        previousButton[0].addEventListener('click', () => handleNextClick(direction.BACKWARD))
      }

      if (hideMenuButton[0] !== undefined) {
        hideMenuButton[0].addEventListener('click', () => hideMenuClick())
      }
    }
  }, [])

  const direction = {
    FORWARD: 'FORWARD',
    BACKWARD: 'BACK'
  }

  const handleCommentClick = (latLng, commentVersion) => {
    console.log(commentVersion)
    const closeButton = document.querySelectorAll('.close-button')
    const mapDiv = document.querySelector('.map-container')
    const formDivComment = document.querySelector('.form-container')
    //const formDivAgree = document.querySelector('.form-container-agree')
    formDivComment.classList.remove('hidden')
    //formDivAgree.classList.remove("hidden");
    mapDiv.classList.remove('govuk-grid-column-full')
    mapDiv.classList.add('govuk-grid-column-two-thirds')
    mapDiv.classList.add
    // this is used within the LocalPlan application for now.
    sessionStorage.setItem('longLat', latLng)
    const narrativeTitle = document.querySelector('.narrative-title')
    var formTitle = document.querySelector('.narrativeT')
    formTitle.innerHTML = narrativeTitle.innerHTML
    if (closeButton [0] !== undefined) {
        closeButton[0].addEventListener('click', () => handleCloseClick())
    }
  }

  const hideMenuClick = () => {    
      const menu = document.querySelector('.menu')
      menu.classList.add('hidden')

      const narratve = document.querySelector('.narrative-container')
      narratve.classList.add('govuk-grid-column-full')
      narratve.classList.remove('govuk-grid-column-two-thirds')
  }

  const handleCloseClick = () => {
    const mapDiv = document.querySelector('.map-container')
    const formDiv = document.querySelector('.form-container')
    formDiv.classList.add('hidden')
    mapDiv.classList.add('govuk-grid-column-full')
    mapDiv.classList.remove('govuk-grid-column-one-half')
  }

  const handleNextClick = (clickDirection) => {
    if(clickDirection === direction.FORWARD){
      UserJourneyStage++
      displayLayersForStage(UserJourneyStage)
    } else {
      UserJourneyStage--
      displayLayersForStage(UserJourneyStage)
    }
  }

  const displayLayersForStage = (stage) => {
    // Find none relevant stages and remove the layers associated with them
    //var removeStages = Stages
    //  .filter(_ => _.key !== undefined)
    //  .filter(_ =>_.key !== stage)
    
      DynamicData.forEach(layer => {
          mapRef.current.removeLayer(DynamicLayerGroup[layer.key])  
      })
    
    // Grab stage object from array by key - iterate the layers and add kayers for stage
    var currentStage = Stages
      .filter(_ => _.key !== undefined)
      .filter(_ =>_.key === stage)[0]

    currentStage.layers.forEach(layer => {
        var layerGroup = DynamicLayerGroup[layer]
        mapRef.current.addLayer(layerGroup)
    })

    const narrativeContent = document.querySelector('.narrative')
    const narrativeTitle = document.querySelector('.narrative-title')
    narrativeContent.innerHTML = currentStage.narrative
    narrativeTitle.innerHTML = currentStage.narrativeTitle
    
    // Get and set zoom and lat long centre control from stage?
    mapRef.current.flyTo([currentStage.latitude, currentStage.longitude], !currentStage.zoom ? 18 : currentStage.zoom)
  }

  const [onClickLatLng, setOnClickLatLng] = useState()
  useEffect(() => {
    if (!onClickLatLng || !mapRef.current._popup) return
    const { _popup } = mapRef.current
    const polygonsFoundInMap = leafletPip.pointInLayer(onClickLatLng, mapRef.current)

    let layerContentInMap = polygonsFoundInMap
      .filter(_ => _.feature && _._popup && _._popup._content)
      .reduce((acc, curr, index, src) => {
        return `${acc} ${curr._popup._content} ${index != src.length - 1 ? '<hr/>' : ''}`
      }, '')

    if (layerContentInMap && _popup !== null && _popup._content !== null && !layerContentInMap.includes(_popup._content))
      layerContentInMap += `<hr/>${_popup._content}`

    /** opens new popup with new content and binds to map, this is instead of using 
     * mapRef.current._popup.setConent as the popup is bound to the layer and not 
     * the map and will therefore close when you move the map */
    if (layerContentInMap) {
      Leaflet.popup()
        .setLatLng(onClickLatLng)
        .setContent(layerContentInMap)
        .openOn(mapRef.current)
    } else {
      Leaflet.popup()
        .setLatLng(onClickLatLng)
        .setContent(_popup._content)
        .openOn(mapRef.current)
    }
    panMap(onClickLatLng)
  }, [onClickLatLng])
  const panMap = latLng => {
    var px = mapRef.current.project(latLng)
    px.y -= mapRef.current._popup._container.clientHeight / 2
    mapRef.current.panTo(mapRef.current.unproject(px), { animate: true })
  }

  const onPopupOpenHandler = event => {
    setOnClickLatLng(event.popup._latlng)
    var latlng = event.popup._latlng
    const commentButton = document.querySelectorAll('.comment-button')
    console.log(commentButton[0])
    //const commentButtonAgree = document.querySelectorAll('.comment-button-agree')
    
    if (commentButton[0] !== undefined) {
      commentButton.forEach(button => button.addEventListener('click', () => handleCommentClick(latlng, 'comment')))
    }

    //console.log(commentButtonAgree[0])
    //if (commentButtonAgree[0] !== undefined) {
    //  commentButtonAgree.forEach(button => button.addEventListener("click", () => handleCommentClick(latlng, "agree")));
    //}
  }

  useEffect(() => {
    mapRef.current.addEventListener('popupopen', onPopupOpenHandler)

    return () => mapRef.current.removeEventListener('popupopen', onPopupOpenHandler)
  }, [])

  useLayoutEffect(() => {
    document.onreadystatechange = function () {
      var Accordion = window.SMBCFrontend.Accordion
      var $accordions = document.querySelectorAll('[data-module="smbc-accordion"]')
      if ($accordions) {
        for (var x = 0; x < $accordions.length; x++) {
          new Accordion($accordions[x]).init()
        }
      }
    }
  }, [])

  return (
    <div id="map" className={Map.Class} />
  )
}

export default App
