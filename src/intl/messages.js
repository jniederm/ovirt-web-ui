// @flow

/**
 * Enter messages here.
 *
 * Please keep keys valid JavaScript identifiers.
 * Please don't add flow type annotation
 *
 * @type {Object.<string, (string | {message: string, description: string})>}
 */
export const messages = {
  start: 'Start',
  reboot: {
    message: 'Reboot',
    description: 'Toolbar button to reboot a VM',
  },
  virtualMachines: 'Virtual Machines',
  addNewVm: 'Add new VM',
  failedToStartVm: 'Failed to start the VM',
  failedToRestartVm: 'Failed to restart the VM',
  failedToShutdownVm: 'Failed to shutdown the VM',
  failedToGetVmConsole: 'Failed to get the VM console',
  failedToSuspendVm: 'Failed to suspend the VM',
  failedToRemoveVm: 'Failed to remove the VM',
  failedToRetrieveVmIcon: 'Failed to retrieve VM icon',
  failedToRetrieveVmConsoleDetails: 'Failed to retrieve VM console details',
  failedToRetrieveListOfVmConsoles: 'Failed to retrieve list of VM consoles',
  failedToRetrieveDiskDetails: 'Failed to retrieve disk details',
  failedToRetrieveVmDisks: 'Failed to retrieve VM disks',
  failedToRetrieveIsoStorages: 'Failed to retrieve ISO storages',
  failedToRetrieveFilesFromStorage: 'Failed to retrieve files from storage',
  failedToRetrieveVmDetails: 'Failed to retrieve VM details',
  actionFailed: '{action} failed',
  pleaseLogIn: 'Please log in ...',
  vmPortal: 'VM Portal',
  unknown: {
    message: 'unknown',
    description: 'followed by "version" to create "unknown version"',
  },
  htmlUnsupportedOvirtVersionFoundButVersionAtLeastRequired: '<strong>Unsupported {version} {productName} version,</strong> found but version at least {requiredVersion} is required.',
  authorizationExpired: 'Authorization expired. The page is going to be reloaded to re-login.',
  useCtrlAltDel: 'Use Ctrl+Alt+Del',
  mapCtrlAltDelKeyboardShortcutToCtrlAltEnd: 'Map Ctrl + Alt + Del keyboard shortcut to Ctrl + Alt + End',
  noVmAvailable: 'No VM available.',
  noVmAvailableForLoggedUser: 'No VM is available for the logged user.',
  consoleInUseContinue: 'Console in use, continue?',
  yes: 'Yes',
  cancel: 'Cancel',
  preserveDisks: 'Preserve disks',
  removeVmQustion: 'Remove the VM?',
  removeVm: 'Remove the VM',
  remove: 'Remove',
  force: 'force',
  openProtocolConsole: 'Open {protocol} Console',
  startVm: 'Start the VM',
  suspendVm: 'Suspend the VM',
  suspend: 'Suspend',
  suspendVmQuestion: 'Suspend the VM?',
  shutdown: 'Shut down',
  shutdownVm: 'Shut down the VM',
  shutdownVmQuestion: 'Shut down the VM?',
  rebootVm: 'Reboot the VM',
  rebootVmQuestion: 'Restart the VM?',
  console: 'Console',
  edit: 'Edit',
  editVm: 'Edit the VM',
  noError: 'No error',
  vmHasPendingConfigurationChanges: 'The virtual machine has pending configuration changes. To take effect, please reboot the virtual machine.',
  pendingChanges: 'Pending Changes',
  vmType_desktop: 'Desktop',
  vmType_server: 'Server',
  vmType_highPerformance: 'High Performance',
  ifVmIsRunningClickToAccessItsGraphicsConsole: 'If the virtual machines is running, click to access its Graphical Console.',
  noDisks: 'no disks',
  htmlPleaseReferToDocumentationForMoreInformation: 'Please refer to <a href="{documentationUrl}" target="_blank">documentation</a> for more information.',
  actualStateVmIsIn: 'The actual state the virtual machine is in.',
  state: 'State',
  optionalUserDescriptionOfVm: 'Optional user description of the virtual machine.',
  description: 'Description',
  groupOfHostsVmCanBeRunningOn: 'Group of hosts the virtual machine can be running on.',
  cluster: 'Cluster',
  containsConfigurationAndDisksWhichWillBeUsedToCreateThisVm: 'Contains the configuration and disks which will be used to create this virtual machine. Please customize as needed.',
  template: 'Template',
  operatingSystemInstalledOnVm: 'Operating system installed on the virtual machine.',
  operatingSystem: 'Operating System',
  typeOfWorkloadVmConfigurationIsOptimizedFor: 'Type of workload the virtual machine configuration is optimized for.',
  optimizedFor: 'Optimized for',
  definedMemory: 'Defined Memory',
  totalMemoryVmWillBeEquippedWith: 'Total memory the virtual machine will be equipped with.',
  cpus: 'CPUs',
  totalCountOfVirtualProcessorsVmWillBeEquippedWith: 'Total count of virtual processors the virtual machine will be equipped with.',
  fullyQualifiedDomainName: 'Fully Qualified Domain Name (FQDN) of the virtual machine. Please note, guest agent must be installed within the virtual machine to collect this value.',
  address: 'Address',
  currentlyInsertedIsoInCdRom: 'Currently inserted ISO in CD-ROM',
  cdRom: 'CDRom',
  consoles: 'Consoles',
  storageConnectedToVm: 'Storage connected to the virtual machines.',
  disks: 'Disks',
  close: 'Close',
  clearMessages: 'Clear Messages',
  messages: 'Messages',
  empty: 'Empty',
}

export type MessageIdType = $Keys<typeof messages>
