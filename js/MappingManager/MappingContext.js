import React, { createContext, useState } from 'react';
export const MappingContext = createContext();

const appData = providenceUIApps.MappingManager.data;

const MappingContextProvider = (props) => {

  const [importerList, setImporterList] = useState([]) //list of importers

  const [importerId, setImporterId] = useState(null); // id of an importer mapping
  const [importerName, setImporterName] = useState(null); // name of an importer mapping
  const [importerCode, setImporterCode] = useState(null); // code for an importer mapping
  
  const [importType, setImportType] = useState(null); // type for an importer, ex objects etc.

  const [currentView, setCurrentView] = useState("importers_list"); //current component view, importers_list, importer_mapping

  const [mappingListGroups, setMappingListGroups] = useState([]) //list of mappings and groups

  const [settingSchema, setSettingSchema] = useState({})
  const [settingFormData, setSettingFormData] = useState({})
  const [importerSchema, setImporterSchema] = useState({})
  const [importerFormData, setImporterFormData] = useState({})
  const [availableBundles, setAvailableBundles] = useState([])

  const [mappingDataList, setMappingDataList] = useState([])
  const [changesMade, setChangesMade] = useState(false)
  
  return (
    <MappingContext.Provider
      value={{
        importerList, setImporterList,
        importerId, setImporterId,
        importerName, setImporterName,
        importerCode, setImporterCode,
        importType, setImportType,
        currentView, setCurrentView,
        settingSchema, setSettingSchema,
        settingFormData, setSettingFormData,
        importerSchema, setImporterSchema,
        importerFormData, setImporterFormData,
        mappingDataList, setMappingDataList,
        availableBundles, setAvailableBundles,
        changesMade, setChangesMade,
        mappingListGroups, setMappingListGroups
      }}>
      {props.children}
    </MappingContext.Provider>
  )
}

export default MappingContextProvider;