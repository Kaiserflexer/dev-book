import React from 'react';
import { Sandpack, SandpackProvider, SandpackReactContext, SandpackLayout, SandpackStack, CodeEditor, SandpackPreview } from "@codesandbox/sandpack-react";
import { monokaiPro } from "@codesandbox/sandpack-themes";
const App = () => {
  const files = {}
  
  return (
     
    
    <SandpackProvider
      files={files} 
      template="react"
      theme={monokaiPro} 
      
    >
      <SandpackReactContext>
        {({ files, updateFile }) => {
          const fileListValues = Object.values(files);
          const fileListKeys = Object.keys(files);

          return (
            <SandpackLayout>
              <SandpackStack style={{ padding: "10px 0", height: "900px" }}>
                <CodeEditor
                  code={fileListValues[0].code}
                  filePath={fileListKeys[0]}
                  onCodeUpdate={(newCode) =>
                    updateFile(fileListKeys[0], newCode)
                  }
                  showTabs
                />
              </SandpackStack>

              <SandpackStack style={{ padding: "10px 0", height: "900px"}}>
                <CodeEditor
                  code={fileListValues[1].code}
                  filePath={fileListKeys[1]}
                  onCodeUpdate={(newCode) =>
                    updateFile(fileListKeys[1], newCode)
                  }
                  showTabs
                  
                />
              </SandpackStack>
    
              <SandpackPreview style={{ height: "900px"}} />
            </SandpackLayout>
          );
        }}
      </SandpackReactContext>
    </SandpackProvider>
    
  )  
}

export default App;
