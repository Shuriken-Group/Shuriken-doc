---
title: C++ Mach-O
lang: cpp
---
```cpp
#include <iostream>
#include <string>
#include <shuriken/parser/shuriken_parsers.h>

using namespace shuriken::parser;

int main() {
    // Parse Mach-O
    const std::string &file_path = "<Path-To-Mach-O-File>";
    std::unique_ptr<macho::Parser> parsed_macho = parse_macho(file_path);

    // Retrieve and print Mach-O header
    const macho::MachoHeader &header = parsed_macho->get_header();
    const macho::MachoHeader::machoheader_t &macho_header = header.get_macho_header_const();

    std::cout << "Mach-O Header:" << std::endl;
    std::cout << " Magic:                 0x" << std::hex << macho_header.magic << std::dec << std::endl;
    std::cout << " CPU type:              0x" << std::hex << macho_header.cputype << std::dec << std::endl;
    std::cout << " CPU subtype:           0x" << std::hex << macho_header.cpusubtype << std::dec << std::endl;
    std::cout << " Filetype:              0x" << std::hex << macho_header.filetype << std::dec << std::endl;
    std::cout << " Number of commands:    " << macho_header.ncmds << std::endl;
    std::cout << " Size of commands:      " << macho_header.sizeofcmds << " bytes" << std::endl;
    std::cout << " Flags:                 0x" << std::hex << macho_header.flags << std::dec << std::endl;
    std::cout << " Reserved:              0x" << std::hex << macho_header.reserved << std::dec << std::endl;

    // Retrieve and print Mach-O segment commands
    const macho::MachoCommands &commands = parsed_macho->get_commands();
    const macho::MachoCommands::segmentcommands_s_t &macho_segmentcommands = commands.get_macho_segmentcommands_const();

    for (const auto& segmentcommand : macho_segmentcommands) {
        const auto& segmentcommand_ref = segmentcommand.get();  
        std::cout << "Segment command: 0x" << std::hex << segmentcommand_ref.cmd << std::dec << std::endl;
        std::cout << " Size:                  " << segmentcommand_ref.cmdsize << " bytes" << std::endl;
        std::cout << " Name:                  " << segmentcommand_ref.segname << std::endl;
        std::cout << " VM address:            0x" << std::hex << segmentcommand_ref.vmaddr << std::dec << std::endl;
        std::cout << " VM size:               " << segmentcommand_ref.vmsize << " bytes" << std::endl;
        std::cout << " Offset in file:        0x" << std::hex << segmentcommand_ref.fileoff << std::dec << std::endl;
        std::cout << " Size in file:          " << segmentcommand_ref.filesize << " bytes" << std::endl;
        std::cout << " Max memory protection: 0x" << std::hex << segmentcommand_ref.maxprot << std::dec << std::endl;
        std::cout << " Initial memory prot:   0x" << std::hex << segmentcommand_ref.initprot << std::dec << std::endl;
        std::cout << " Number of Sections:    0x" << std::hex << segmentcommand_ref.nsects << std::dec << std::endl;
        std::cout << " Flags:                 0x" << std::hex << segmentcommand_ref.flags << std::dec << std::endl;
    }    
 
    return 0;
}
```